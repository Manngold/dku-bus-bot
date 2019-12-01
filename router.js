import express from "express";
import { dankook, yawoori, cheonan, sangmyung, doojeong } from "./controller";

const apiRouter = express.Router();

apiRouter.post("/dankook", dankook);
apiRouter.post("/yawoori", yawoori);
apiRouter.post("/cheonan", cheonan);
apiRouter.post("/sangmyung", sangmyung);
apiRouter.post("/doojeong", doojeong);
