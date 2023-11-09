const http = require("http");
const dotenv = require("dotenv").config();
const fs = require("fs");
const callApi = require("./utilities/apiCall");
const { readJokes, jokesPath } = require("./utilities/readJokes");
const port = process.env.PORT || 8000;

http
  .createServer((req, res) => {
    if (req.url === "/favicon.ico") {
      res.statusCode = 204;
      res.end();
      return;
    }

    callApi((data) => {
      const joke = data;

      let jokesList = readJokes();

      if (!Array.isArray(jokesList)) {
        jokesList = [];
      }
      jokesList.push(joke);

      const convertedJokeList = JSON.stringify(jokesList);

      try {
        fs.writeFileSync(jokesPath, convertedJokeList, null, 2);
      } catch (err) {
        console.log("impossibile scrivere il file");
      }

      const html = [];
      html.push("<ul>");
      jokesList.forEach((joke) => {
        html.push(`<li>${joke.value}</li>`);
      });
      html.push("</ul>");

      res
        .setHeader("Content-Type", "text/html; charset=utf-8")
        .end(html.join(""));
    });
  })
  .listen(port, function () {
    console.log(`Server is running on port ${port}`);
  });
