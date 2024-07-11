import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import * as morgan from 'morgan';
// import { validationResult } from "express-validator";
import mainRouter from "./routes/index"; // Import the central router

function handleError(err, _req, res, _next) {
  res.status(err.statusCode || 500).send(err.message)
}


const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(handleError);

// Use the central router
app.use("/", mainRouter);


// const app = express();
// app.use(morgan('tiny'));
// app.use(bodyParser.json());



export default app;
