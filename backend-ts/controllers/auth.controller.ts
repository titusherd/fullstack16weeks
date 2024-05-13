import type { Request, Response } from "express";

export function login(req: Request, res: Response) {
  return res.send("Login page");
}

export function register(req: Request, res: Response) {
  return res.send("Register page");
}
