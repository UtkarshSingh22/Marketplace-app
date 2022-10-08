import express from "express";
import authRouter from "./routes/auth";
import morgan from 'morgan'
require("dotenv").config();

const app = express();

app.use("/api", authRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
