import requests
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def getCharacterInfo():
    # query = request.args["search"]
    path = "https://{showname}.fandom.com/wikia.php?format=json&controller=MercuryApi&method=getPage&title=Category:Individuals"
    characterInfo = requests.get(path).json()
    if characterInfo.status_code == 404:
        path = "https://{showname}.fandom.com/wikia.php?format=json&controller=MercuryApi&method=getPage&title=Category:Characters"
        characterInfo = requests.get(path).json()

    characterInfo = characterInfo["data"]["nsSpecificContent"]["trendingPages"]
    character = []
    for i in range(7):
        newThumb = character[i]["thumbnail"].split("revision")
        newDict = {"title": character[i]["title"], "thumbnail": newThumb[0]}
        character.append(newDict)

    context = {"characters": character}

    return render_template("sorter.html", **context)


if __name__ == "__main__":
    app.run(debug=True)