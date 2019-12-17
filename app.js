import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import apiRouter from "./router";
import caffeine from "./feature/caffeine";

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRouter);

setInterval(caffeine, 300000);

export default app;
