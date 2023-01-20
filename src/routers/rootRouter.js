import express from "express";
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoController";

const rootRouter = express.Router();


rootRouter.get("/", trending);
rootRouter.get("/join", join);

export default rootRouter;