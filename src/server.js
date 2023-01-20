import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
const PORT = 5600;
const logger = morgan("dev");


app.use(logger);
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);


const handleListening = () => {
    console.log(`Server Listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);