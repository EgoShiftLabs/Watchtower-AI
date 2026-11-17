"""Offline regression tests for normalized SAM.gov public notice handling."""
import unittest
from datetime import date, timedelta
from scripts.collect_sam import clean_notice, public_link, iso_day

TODAY = date(2026, 11, 17)

def notice(**overrides):
    base = {
        "noticeId": "1f42ea219a104a54b732cc0a65a80d81",
        "title": "Illustrative Cyber Services Solicitation",
        "type": "Combined Synopsis/Solicitation",
        "active": "Yes",
        "responseDeadLine": "2026-12-18",
        "postedDate": "2026-11-16",
        "fullParentPathName": "TEST FEDERAL AGENCY",
        "naicsCode": "541512",
        "typeOfSetAsideDescription": "Small Business",
        "pointOfContact": [{"email": "DO-NOT-PUBLISH@example.com"}],
    }
    base.update(overrides)
    return base

class PublicFeedTests(unittest.TestCase):
    def test_normalizes_only_public_non_sensitive_metadata(self):
        result = clean_notice(notice(), TODAY)
        self.assertEqual(result["deadline"], "2026-12-18")
        self.assertEqual(result["naics"], "541512")
        self.assertTrue(result["sourceUrl"].startswith("https://sam.gov/opp/"))
        self.assertFalse(result["verified"])
        self.assertNotIn("pointOfContact", result)
        self.assertNotIn("DO-NOT-PUBLISH", str(result))
    def test_expired_or_inactive_notices_are_excluded(self):
        self.assertIsNone(clean_notice(notice(responseDeadLine="2025-01-01"), TODAY))
        self.assertIsNone(clean_notice(notice(active="No"), TODAY))
    def test_awards_excluded(self):
        self.assertIsNone(clean_notice(notice(type="Award Notice"), TODAY))
    def test_missing_deadline_or_id_excluded(self):
        self.assertIsNone(clean_notice(notice(responseDeadLine=None), TODAY))
        self.assertIsNone(clean_notice(notice(noticeId="not-valid!"), TODAY))
    def test_notice_date_spelling_variation(self):
        result=clean_notice(notice(responseDeadLine=None,reponseDeadLine="2026-12-19"),TODAY)
        self.assertEqual(result["deadline"], "2026-12-19")
    def test_block_noncanonical_links(self):
        self.assertEqual(public_link({"noticeId":"abc ?token"}),"")
    def test_iso_day(self):
        self.assertEqual(iso_day("2026-11-17T15:01:00Z"),"2026-11-17")
        self.assertEqual(iso_day(None),"")

if __name__ == "__main__":
    unittest.main()
