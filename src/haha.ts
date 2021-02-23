"use strict";

//const express = require("express");から変更しないこと
import express from "express";
const app = express();

app.get("/", (_, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/hoge", (_, res) => {
  res.json({ message: process.env.MESSAGE ?? "message" });
});

export default app;
