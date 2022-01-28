from plone import api
import requests


def message(self):
    esirius_apikey = api.portal.get_registry_record("smartweb.esirius_apikey") or ""
    response = requests.get(f"https://passerelle-braine-l-alleud.test.entrouvert.org/esirius-swi/prod/get_all_indicators?apikey={esirius_apikey}")    
    data = response.json()
    return data.get("data")[0].get("estimatedAvgWaitingTime")
