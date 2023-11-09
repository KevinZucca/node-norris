const fs = require("fs");
const path = require("path");
const jokesPath = path.join(__dirname, "../", "norrisDb.json");

function readJokes() {
  try {
    const jokes = fs.readFileSync(jokesPath, "utf-8");
    return JSON.parse(jokes);
  } catch (err) {
    console.log("c'è stato un errore");
  }
}

module.exports = { readJokes, jokesPath };
