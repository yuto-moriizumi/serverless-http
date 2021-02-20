"use strict";

const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.json({ message: "Hello World!" });
});

app.get("/hoge", function (req, res) {
  res.json({ message: "Hello Hoge!" });
});

module.exports.main = serverless(app);
