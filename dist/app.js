"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module dependencies.
 */
const express_1 = __importDefault(require("express"));
const compression_1 = __importDefault(require("compression"));
const dotenv_1 = __importDefault(require("dotenv"));
/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv_1.default.config({ path: ".env.example" });
/**
 * Create Express server.
 */
const app = (0, express_1.default)();
/**
 * Express configuration.
 */
app.set("port", process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.use((0, compression_1.default)());
const data = {
    slackUsername: "PrinceCodes",
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
    console.log(`App is running on http://localhost:${app.get("port")} in ${app.get("env")} mode`);
    console.log("Press CTRL-C to stop");
});
module.exports = app;
