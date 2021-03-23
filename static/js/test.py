import requests
import json
from pprint import PrettyPrinter

pp = PrettyPrinter(indent=4)


def getCharacterInfo():
    # query = request.args["search"]
    path = "https://gameofthrones.fandom.com/wikia.php?format=json&controller=MercuryApi&method=getPage&title=Category:Individuals"
    characterInfo = requests.get(path).json()
    # if characterInfo["exception"]["code"] == 404:
    #     path = "https://gameofthrones.fandom.com/wikia.php?format=json&controller=MercuryApi&method=getPage&title=Category:Characters"
    #     characterInfo = requests.get(path).json()

    characterInfo = characterInfo["data"]["nsSpecificContent"]["trendingPages"]
    character = []
    for i in range(7):
        newThumb = characterInfo[i]["thumbnail"].split("revision")
        site = characterInfo[i]["site_name"]
        site = site[:-5]
        newDict = {
            "name": characterInfo[i]["title"],
            "img": newThumb[0],
            "options": site,
        }
        character.append(newDict)

    with open("2021-03-31.js", "w+") as outfile:
        json.dump(character, outfile)
    pp.pprint(character)


getCharacterInfo()
