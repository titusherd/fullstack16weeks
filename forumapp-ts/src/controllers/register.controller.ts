import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user.model";

export const registerHandler = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  res.status(201).send({ message: "User created!" });
};
