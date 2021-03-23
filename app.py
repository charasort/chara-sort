import requests
import json
from pprint import PrettyPrinter

# from flask import Flask, render_template

# app = Flask(__name__)


# @app.route("/")
# def getCharacterInfo():
#     # query = request.args["search"]
#     path = "https://gameofthrones.fandom.com/wikia.php?format=json&controller=MercuryApi&method=getPage&title=Category:Individuals"
#     characterInfo = requests.get(path).json()
#     # if characterInfo["exception"]["code"] == 404:
#     #     path = "https://gameofthrones.fandom.com/wikia.php?format=json&controller=MercuryApi&method=getPage&title=Category:Characters"
#     #     characterInfo = requests.get(path).json()

#     characterInfo = characterInfo["data"]["nsSpecificContent"]["trendingPages"]
#     character = []
#     for i in range(7):
#         newThumb = characterInfo[i]["thumbnail"].split("revision")
#         newDict = {"title": characterInfo[i]["title"], "thumbnail": newThumb[0]}
#         character.append(newDict)

#     context = {"characters": character}

#     return render_template("sorter.html", **context)


# if __name__ == "__main__":
#     app.run(debug=True)

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
        site = characterInfo[i]["site_name"].split(" Wiki)")
        newDict = {
            "name": characterInfo[i]["title"],
            "img": newThumb[0],
            "site_name": site,
        }
        character.append(newDict)

    with open("2021-03-31.js", "w+") as outfile:
        json.dump(character, outfile)
    pp.pprint(character)


getCharacterInfo()
