import express from "express";
import authRouter from "./routes/auth";
import cors from "cors";
import mongoose from "mongoose";
const morgan = require("morgan");
require("dotenv").config();

const app = express();

//db connection
mongoose.connect(process.env.DATABASE, {}).then(client => {
    console.log('db connected')
}).catch((err) => console.log('db connection failed: ' + err ))

//middlewares
app.use(morgan("dev"));
app.use(cors());

//routers
app.use("/api", authRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
