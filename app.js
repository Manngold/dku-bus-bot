import express from "express";
import bodyParser from "body-parser";
import { getBusInfo } from "./api";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => await getBusInfo("CAB285000678"));

export default app;
