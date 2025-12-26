import { userHandler } from "./users.controller";
import { Router } from "express";

export const userRouter =  Router();

userRouter.post("/" , userHandler)
