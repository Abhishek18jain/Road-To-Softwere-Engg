import { Request , Response , NextFunction } from "express";
import * as todoservice from "./todo.service";

export const createTodoHandler = async (req:Request , res:Response , next :NextFunction)=>{
try {
    const {title , userId} = req.body;
    const todo = await todoservice.createTodo(title, userId)
    res.status(201).json(todo)
} catch (err) {
    next(err)
}
}