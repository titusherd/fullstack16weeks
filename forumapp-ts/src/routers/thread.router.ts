import express from "express";
import { Request, Response } from "express";

export const threadRouter = express.Router();

threadRouter.get("/threads", (req: Request, res: Response) => {
  res.send("Hello World!");
});

threadRouter.post("/threads", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// module.exports threadRouter; // why it doesn't work with export default?
