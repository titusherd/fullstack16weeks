import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { authRouter } from "./routers/auth.router";

dotenv.config();
const app = express();
const port = 8000;

mongoose.connect(process.env.MONGODB_URI as string);

app.use(authRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port);
