import express from "express";
import { login, register } from "../../controllers/auth.controller";

export const authRouter = express();

authRouter.get("/login", login);

authRouter.get("/register", register);
