import express from "express";
import authRouter from "./routes/auth";

const app = express();

app.use("/api", authRouter);

app.listen(3000);
