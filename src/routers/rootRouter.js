import express from "express";
import { join } from "../controllers/userController";
import { home, search } from "../controllers/videoController";

const rootRouter = express.Router();


rootRouter.get("/", home);
rootRouter.get("/join", join);
rootRouter.get("/search", search);

export default rootRouter;