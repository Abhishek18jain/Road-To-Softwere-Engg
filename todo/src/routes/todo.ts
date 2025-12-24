import { CreateTodo , deleteTodo , updateTodo, getTodo } from "../controllers/CreateTodoController.js";
import { Router } from "express";
import {validate} from "../middlewares/validate.middlewere.js"
import { CreateTodoSchema, UpdateTodoSchema } from "../dtos/todo.dto.js";

const router = Router();

router.post("/create" ,validate(CreateTodoSchema), CreateTodo);
router.get("/" , getTodo);
router.patch("/update/:id" ,validate(UpdateTodoSchema), updateTodo);
router.delete("/delete/:id" ,validate(UpdateTodoSchema), deleteTodo);
export default router;