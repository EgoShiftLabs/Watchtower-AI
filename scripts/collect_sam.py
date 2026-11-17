#!/usr/bin/env python3
"""Watchtower public opportunity *research* feed. No AI, client data or credentials published.
Requires SAM_API_KEY in GitHub Actions secrets. Official docs:
https://open.gsa.gov/api/get-opportunities-public-api/
"""
import json
import os
import re
import sys
import urllib.parse
import urllib.request
from datetime import date, datetime, timedelta, timezone
from pathlib import Path

OUT = Path("data/public-feed.json")
API = "https://api.sam.gov/opportunities/v2/search"
NAICS = ("541511", "541512")
ALLOWED_TYPES = ("solicitation", "sources sought", "presolicitation", "pre-solicitation")
MAX_ITEMS = 60


def iso_day(value):
    if not value:
        return ""
    text = str(value).strip()
    if re.match(r"^\d{4}-\d{2}-\d{2}", text):
        return text[:10]
    return ""


def public_link(item):
    notice = str(item.get("noticeId") or "")
    if re.fullmatch(r"[A-Za-z0-9-]{8,80}", notice):
        return f"https://sam.gov/opp/{notice}/view"
    return ""


def clean_notice(item, today):
    title = str(item.get("title") or "").strip()
    kind = str(item.get("type") or item.get("baseType") or "").lower()
    deadline = iso_day(item.get("responseDeadLine") or item.get("reponseDeadLine"))
    if not title or not any(t in kind for t in ALLOWED_TYPES):
        return None
    if not deadline or deadline < today.isoformat():
        return None
    if str(item.get("active", "Yes")).lower() not in ("yes", "true"):
        return None
    link = public_link(item)
    if not link:
        return None
    return {
        "id": str(item.get("noticeId"))[:80],
        "title": title[:190],
        "buyer": str(item.get("fullParentPathName") or item.get("department") or "Federal agency")[:180],
        "sector": "government",
        "naics": str(item.get("naicsCode") or "")[:6],
        "setAside": str(item.get("typeOfSetAsideDescription") or item.get("setAside") or "Not supplied")[:90],
        "noticeType": str(item.get("type") or "")[:80],
        "postedDate": iso_day(item.get("postedDate")),
        "deadline": deadline,
        "sourceUrl": link,
        "source": "SAM.gov public API",
        "verified": False,  # API inclusion is not contract or eligibility verification.
        "researchOnly": True,
    }


def fetch_code(api_key, naics, start, end):
    query = urllib.parse.urlencode({
        "api_key": api_key, "postedFrom": start.strftime("%m/%d/%Y"),
        "postedTo": end.strftime("%m/%d/%Y"), "ncode": naics,
        "limit": 100, "offset": 0,
    })
    request = urllib.request.Request(
        f"{API}?{query}",
        headers={"Accept": "application/json", "User-Agent": "WatchtowerAI/0.2 public-research"},
    )
    with urllib.request.urlopen(request, timeout=35) as response:
        payload = json.load(response)
    if not isinstance(payload, dict):
        raise ValueError("Unexpected API response")
    records = payload.get("opportunitiesData")
    if not isinstance(records, list):
        raise ValueError("Missing opportunitiesData; refusing to publish incomplete feed")
    return records


def main():
    key = os.getenv("SAM_API_KEY", "").strip()
    if not key:
        print("SAM_API_KEY not configured. The official feed remains disabled; no sample data masquerades as live.")
        return 0
    today = date.today()
    # Bounded two-call daily request budget: two NAICS codes, last 14 days.
    start = today - timedelta(days=14)
    found = {}
    try:
        for naics in NAICS:
            for raw in fetch_code(key, naics, start, today):
                item = clean_notice(raw, today)
                if item:
                    found[item["id"]] = item
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        # Avoid printing HTTP request URLs, which contain secret api_key.
        print(f"Source ingest failed ({type(exc).__name__}). Existing feed retained.", file=sys.stderr)
        return 1

    items = sorted(found.values(), key=lambda r: (r["deadline"], r["title"]))[:MAX_ITEMS]
    output = {
        "schema": "watchtower-public-v1",
        "status": "active",
        "retrievedAt": datetime.now(timezone.utc).isoformat(),
        "source": "SAM.gov Public Opportunities API",
        "naicsQueried": list(NAICS),
        "items": items,
        "notice": "Public notices only. Not buyer intent verification, prime eligibility, client budget, a vendor quotation, or an approved deal. Check the original SAM.gov listing and solicitation documents.",
    }
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(json.dumps(output, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Prepared sanitized public research feed: {len(items)} notices. No credentials or contacts published.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
