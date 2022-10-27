/**
 * Module dependencies.
 */
import express, { Express, Request, Response } from "express";
import compression from "compression";
import errorHandler from "errorhandler";
import dotenv from "dotenv";
import cors from "cors";

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: ".env.example" });

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.set("port", process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.use(
  cors({
    origin: "*",
  })
);
app.use(compression());

interface SampleData {
  slackUsername: string;
  backend: boolean;
  age: number;
  bio: string;
}

const data: SampleData = {
  slackUsername: "princecodes247",
  backend: true,
  age: 19,
  bio: "I am a software developer and musician with a passion for learning and trying out new technologies",
};

app.get("/", (_, res) => {
  res.json(data);
});

/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
  console.log(
    `App is running on http://localhost:${app.get("port")} in ${app.get(
      "env"
    )} mode`
  );
  console.log("Press CTRL-C to stop");
});

module.exports = app;
