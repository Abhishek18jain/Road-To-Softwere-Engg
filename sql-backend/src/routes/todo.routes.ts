import { Router } from "express";
import {getTodoById , todoHandler , getTodohandler, updateTodo , deleteTodo} from "../modules/todo/todo.controller.js";
import { validate } from "../middleware/error.middleware.js";
import { createTodoSchema } from "../modules/todo/todo.sechema.js";

export const TodoRouter = Router();
TodoRouter.post("/" ,validate(createTodoSchema), todoHandler);
TodoRouter.get("/" , getTodohandler);
TodoRouter.get("/get/:id" , getTodoById);
TodoRouter.put("/update/:id" , updateTodo);
TodoRouter.delete("/delete/:id",  deleteTodo);
