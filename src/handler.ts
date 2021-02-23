"use strict";

import app from "./haha";
// import serverless from "serverless-http";
import serverless = require("serverless-http");

module.exports.main = serverless(app);
