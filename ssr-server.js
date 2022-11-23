const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/movie", (req, res) => {
      return res.end("we made it!");
    });

    server.get("/posts", (req, res) => {
    //   const actualPage = "/post";
    //   const queryParams = req.params.id;
      res.end("<h1>Hello!</h1>");
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
