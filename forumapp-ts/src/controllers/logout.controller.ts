import { Request, Response } from "express";

export const logoutHandler = (req: Request, res: Response) => {
  res.send("Logout!");
};
