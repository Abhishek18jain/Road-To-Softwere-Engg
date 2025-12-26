import { Router } from "express";
import { createTodoHandler } from "./todo.controller";

export const todoRouter = Router();
 todoRouter.post("/" , createTodoHandler)