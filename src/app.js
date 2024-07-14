

const express = require("express");
const bodyParser = require("body-parser");
const mainRouter = require("./routes/index")
// import * as morgan from 'morgan';

const fs = require('fs');
const { marked } = require("marked");



const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Use the central router
app.use("/", mainRouter);

app.get('/', async(req, res) => {
    var readme = 'README.md';
    var output = fs.readFileSync(readme, 'utf8');
    res.send(marked(output.toString()))
})

module.exports = app;
