import express from "express";
import cors from "cors";
import voteRoute from "./router/voteRoute";
import getDeptByEmail from "./router/getDeptByEmail";

const app = express();
app.use(express.json());
app.use(cors());

// use Routers
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/vote", voteRoute);
app.use("/api/getdept", getDeptByEmail);

export default app;
