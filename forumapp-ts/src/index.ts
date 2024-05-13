import express from "express";
import { Request, Response } from "express";

const app = express();
const port = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port);
