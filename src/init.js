import "./db";
import "./models/Video";
import app from "./server";

const PORT = 5700;

const handleListening = () => {
    console.log(`Server Listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);