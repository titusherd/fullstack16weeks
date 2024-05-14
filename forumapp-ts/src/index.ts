import express from "express";
import { Request, Response } from "express";
import { threadRouter } from "./routers/thread.router";
import { authRouter } from "./routers/auth.router";
import { replyRouter } from "./routers/reply.router";
import cookieParser from "cookie-parser";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cookieParser());

app.use(threadRouter);
app.use(authRouter);
app.use(replyRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port);
