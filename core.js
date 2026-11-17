// Watchtower's deterministic, dependency-free decision logic. No AI predictions here.
export const LIMITS = Object.freeze({perDealExposure:1000,portfolioExposure:1000,monthlyTarget:2500,minMargin:25,maxOwnerHours:2,maxWeeklyBrief:5});
export const SECTORS = Object.freeze({digital:"Digital services",government:"Government contracts",ai:"AI ventures"});
export const STAGES = ["NEW","VERIFIED_SOURCE","PRELIMINARY_FIT","VENDOR_SHORTLIST","QUOTES_RECEIVED","FINANCIAL_REVIEW","OWNER_APPROVAL","PROPOSAL_READY","PROPOSAL_SENT","WON","LOST","ARCHIVED"];
export const SOURCES = [
  {id:"sam",name:"SAM.gov opportunities",kind:"Official federal opportunities",url:"https://sam.gov/opportunities",note:"Formal federal solicitations; API requires a private server-held key.",phase:"Backend"},
  {id:"sam-api",name:"SAM.gov Open API",kind:"Government data interface",url:"https://open.gsa.gov/api/get-opportunities-public-api/",note:"Documented opportunity API. No direct client-side key use.",phase:"Backend"},
  {id:"detroit",name:"Detroit Office of Contracting & Procurement",kind:"City opportunities",url:"https://detroitmi.gov/departments/office-chief-financial-officer/ocfo-divisions/office-contracting-and-procurement",note:"Use official city purchasing portal, check closing dates and required registrations.",phase:"Manual"},
  {id:"michigan",name:"Michigan Vendor Opportunity Dashboard",kind:"State contracts",url:"https://www.michigan.gov/dtmb/procurement/contractconnect/vendor-opportunity-dashboard",note:"Preview and follow SIGMA Vendor Self Service for active solicitations.",phase:"Manual"},
  {id:"sba",name:"SBA Small Business Search",kind:"Potential delivery partners",url:"https://search.certifications.sba.gov/",note:"Check business profiles and independently verify current certifications.",phase:"Manual"},
  {id:"gsa",name:"GSA small business opportunities",kind:"Teaming and market research",url:"https://www.gsa.gov/small-business/find-opportunities",note:"Subcontracting resources and procurement guidance.",phase:"Manual"},
  {id:"clutch",name:"Clutch",kind:"Digital vendors",url:"https://clutch.co/",note:"Human-assisted discovery; don't scrape or claim reviews are verified references.",phase:"Manual"},
  {id:"usaspending",name:"USAspending",kind:"Historical procurement insight",url:"https://www.usaspending.gov/",note:"Past awards are not active solicitations.",phase:"Research"}
];
export function safeUrl(value) { try {const u=new URL(String(value||"").trim());return /^(https?:)$/.test(u.protocol)?u.href:"";}catch{return"";} }
export function escapeHtml(input) {return String(input??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));}
export function money(value){const n=Number(value);return Number.isFinite(n)?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(n):"—";}
export function numberOrNull(value){if(value===null||value===undefined||String(value).trim()==="")return null;const n=Number(value);return Number.isFinite(n)&&n>=0?n:null;}
export function computeFinance(deal){
  const price=numberOrNull(deal.price),vendorCost=numberOrNull(deal.vendorCost),otherCost=numberOrNull(deal.otherCost),reserve=numberOrNull(deal.contingency);
  const vendorUpfront=numberOrNull(deal.vendorUpfront),otherUpfront=numberOrNull(deal.otherUpfront);
  // Blank direct costs and contingency are NOT zero. A deliberate explicit 0 is valid.
  const known=price!==null&&price>0&&vendorCost!==null&&vendorCost>0&&otherCost!==null&&reserve!==null&&vendorUpfront!==null&&otherUpfront!==null;
  const contribution=known?price-vendorCost-otherCost-reserve:null;
  const margin=known?contribution/price*100:null;
  // Conservative exposure does not net any client deposits (even proposed deposits).
  const exposure=vendorUpfront!==null&&otherUpfront!==null&&reserve!==null?vendorUpfront+otherUpfront+reserve:null;
  return {known,price,vendorCost,otherCost,reserve,contribution,margin,exposure,clientDeposit:numberOrNull(deal.clientDeposit)??0,breakEven:known?vendorCost+otherCost+reserve:null};
}
export function matchVendors(deal,vendors){
  const needed=Array.isArray(deal.skills)?deal.skills.map(s=>String(s).trim().toLowerCase()).filter(Boolean):[];
  return vendors.map(v=>{
    const offered=(Array.isArray(v.skills)?v.skills:[]).map(s=>String(s).trim().toLowerCase());
    const matched=needed.filter(s=>offered.some(p=>p===s||p.includes(s)||s.includes(p)));
    const cap=needed.length?Math.round(35*matched.length/needed.length):0;
    const estimate=numberOrNull(v.estimatedCost);
    const cashFit=estimate!==null&&numberOrNull(deal.price)!==null?estimate<=Number(deal.price)*.75?12:estimate<=Number(deal.price)?5:0:0;
    const references=v.referencesChecked?15:0;
    const availability=v.availability==="available"?10:0;
    const credentials=v.verified?10:0;
    const reliability=v.communicationChecked?10:0;
    const score=cap+cashFit+references+availability+credentials+reliability;
    return {...v,matchScore:score,matchedSkills:matched,missing:needed.filter(s=>!matched.includes(s)),quoteLabel:v.quoteVerified?"Verified quote":"Estimate / unverified"};
  }).sort((a,b)=>b.matchScore-a.matchScore);
}
export function evaluateGates(deal,vendors=[],portfolioExposure=0){
  const f=computeFinance(deal),v=vendors.find(v=>v.id===deal.vendorId);
  const sample=Boolean(deal.demo);
  const evidence=(value,min=12)=>typeof value==="string"&&value.trim().length>=min;
  const source=Boolean(!sample&&deal.verifiedSource&&deal.buyerVerified&&safeUrl(deal.sourceUrl)&&evidence(deal.sourceEvidence)&&evidence(deal.buyerEvidence)&&deal.sourceCheckedAt);
  const vendor=Boolean(!sample&&v&&!v.demo&&v.verified&&v.availability==="available"&&deal.quoteVerified&&evidence(deal.quoteEvidence)&&deal.quoteDate&&f.known);
  const margin=Boolean(f.known&&f.margin>=LIMITS.minMargin);
  const cash=Boolean(f.exposure!==null&&f.exposure<=LIMITS.perDealExposure&&f.exposure+Math.max(0,portfolioExposure)<=LIMITS.portfolioExposure);
  const compliance=Boolean(deal.termsVerified&&deal.complianceChecked&&evidence(deal.termsEvidence)&&evidence(deal.complianceEvidence)&&(deal.sector!=="government"||(deal.governmentReview&&evidence(deal.governmentReviewEvidence)&&evidence(deal.naicsCode,6)&&evidence(deal.setAsideType,2)&&evidence(deal.subcontractingNotes))));
  const time=Boolean(numberOrNull(deal.weeklyHours)!==null&&Number(deal.weeklyHours)<=LIMITS.maxOwnerHours);
  const checks=[
    {id:"source",label:"Source and buyer evidence recorded",pass:source,detail:sample?"Fictional sample — never eligible for approval":"Original URL, verification date and written source/buyer evidence required"},
    {id:"vendor",label:"Qualified vendor and written quote evidence",pass:vendor,detail:"Available, manually verified candidate, written quote reference and date required"},
    {id:"margin",label:"Contribution margin at least 25%",pass:margin,detail:"Actual client price and vendor quote must support margin after reserve"},
    {id:"cash",label:"Conservative cash exposure within $1,000",pass:cash,detail:"Includes vendor upfront, other upfront and contingency; deposits are not netted"},
    {id:"compliance",label:"Terms and compliance evidence",pass:compliance,detail:deal.sector==="government"?"NAICS, set-aside, subcontracting analysis and written compliance rationale required":"Record written explanation of terms and compliance review"},
    {id:"time",label:"Owner work within 2 hours/week",pass:time,detail:"Escalate high-touch execution or budget a manager"}
  ];
  return {checks,passed:checks.every(g=>g.pass),finance:f};
}
export function scoreOpportunity(deal,vendors=[],portfolioExposure=0){
  const f=computeFinance(deal);
  const vendor=v=>v.id===deal.vendorId;
  const chosen=vendors.find(vendor);
  const demand=deal.demo?0:(deal.verifiedSource&&deal.buyerVerified&&safeUrl(deal.sourceUrl)&&String(deal.sourceEvidence||"").trim().length>=12?25:deal.sourceUrl?5:0);
  const contribution=f.known&&f.margin>=25?Math.min(20,Math.round((f.margin/50)*20)):f.known&&f.margin>0?5:0;
  const cashflow=f.exposure!==null&&f.exposure+portfolioExposure<=LIMITS.portfolioExposure?20:f.exposure!==null&&f.exposure<=LIMITS.perDealExposure?8:0;
  const vendorCoverage=chosen?.verified?chosen.availability==="available"?15:7:chosen?3:0;
  const ownerTime=numberOrNull(deal.weeklyHours)!==null&&Number(deal.weeklyHours)<=2?10:0;
  const evidence=deal.demo?0:deal.verifiedSource&&safeUrl(deal.sourceUrl)&&deal.sourceCheckedAt&&String(deal.buyerEvidence||"").trim().length>=12?10:deal.sourceUrl?4:0;
  return Math.min(100,demand+contribution+cashflow+vendorCoverage+ownerTime+evidence);
}
export function realizedContribution(transactions,dealId=null){
  return (Array.isArray(transactions)?transactions:[]).filter(t=>!dealId||t.dealId===dealId).reduce((sum,t)=>{
    const amount=numberOrNull(t.amount);
    if(amount===null)return sum;
    return sum+(t.type==="receipt"?amount:t.type==="expense"?-amount:0);
  },0);
}
export function activePortfolioExposure(deals,excludeId=null){
  return (Array.isArray(deals)?deals:[]).filter(d=>d.id!==excludeId&&["OWNER_APPROVAL","PROPOSAL_READY","PROPOSAL_SENT","WON"].includes(d.stage)).reduce((sum,d)=>sum+(computeFinance(d).exposure??0),0);
}
export function isOverdue(d){if(!d.deadline)return false;const deadline=new Date(d.deadline+"T23:59:59");return Number.isFinite(deadline.getTime())&&deadline.getTime()<Date.now();}

/**
 * Scenario-only waterfall. Forecast receipts are not verified funds, not counted
 * against hard cash-exposure requirements, and never included in realized income.
 * Entries: {date: YYYY-MM-DD, type: 'receipt'|'expense', amount, note}.
 */
export function forecastCashWaterfall(deal) {
  const entries=(Array.isArray(deal.cashPlan)?deal.cashPlan:[])
    .filter(x=>x&&/^\d{4}-\d{2}-\d{2}$/.test(String(x.date||""))&&["receipt","expense"].includes(x.type)&&numberOrNull(x.amount)!==null)
    .map(x=>({date:x.date,type:x.type,amount:Number(x.amount),note:String(x.note||"").slice(0,120)}))
    .sort((a,b)=>a.date.localeCompare(b.date)||(a.type==="expense"?-1:1));
  let balance=0,lowest=0,totalOutflows=0,totalReceipts=0;
  const timeline=entries.map(x=>{
    balance+=x.type==="receipt"?x.amount:-x.amount;
    if(x.type==="expense")totalOutflows+=x.amount;else totalReceipts+=x.amount;
    lowest=Math.min(lowest,balance);
    return {...x,runningBalance:balance};
  });
  return {timeline,peakProjectedFundingGap:-lowest,totalOutflows,totalReceipts,complete:entries.length>0};
}
