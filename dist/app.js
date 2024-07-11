"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
// import { validationResult } from "express-validator";
var index_1 = require("./routes/index"); // Import the central router
function handleError(err, _req, res, _next) {
    res.status(err.statusCode || 500).send(err.message);
}
var app = express();
// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(handleError);
// Use the central router
app.use("/", index_1.default);
// const app = express();
// app.use(morgan('tiny'));
// app.use(bodyParser.json());
exports.default = app;
//# sourceMappingURL=app.js.map