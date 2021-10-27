const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const httpStatusCodes = require("http-status-codes").StatusCodes;

const moduleRouter = require("./routers/module.router");

const app = express();

const corsOptions = { origin: true, credentials: true };

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.get("/", async function (req, res) {
  res.status(httpStatusCodes.OK);
  res.send("Server Operating Normally");
});

app.use("/module", moduleRouter);

module.exports = app;
