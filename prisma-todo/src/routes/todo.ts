import {Router} from "express";
import { createTodo } from "../controller/todo.js";

const router = Router();

router.post("/" , createTodo)
export default router;