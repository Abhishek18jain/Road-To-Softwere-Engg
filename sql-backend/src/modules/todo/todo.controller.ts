import {Request ,Response} from "express";
import * as todoService from "./todo.service.js"
import { number } from "zod";

export const todoHandler = async(req:Request , res : Response)=>{
    const todo = await todoService.createTodo(req.body);
    res.status(201).json(todo)
} 
export const getTodohandler = async(req:Request , res : Response)=>{
const todo = await todoService.getTodo();
return res.status(201).json(todo)
}
export const getTodoById = async(req : Request , res: Response)=>{
    const id = Number (req.params.id);
    const todo = await todoService.getTodoId(id);
    if(!todo){
        return res.status(404).json({message: "todo not found"})
    }

    res.json(todo);
}
export const updateTodo = async(req:Request , res :Response)=>{
    const id = Number(req.params.id);
    const {title} = req.body ;
    const todo = await todoService.updateTodo(id, title);
    res.status(201).json(todo) 
}
export const deleteTodo = async(req:Request , res :Response)=>{
       const id = Number(req.params.id);
    const todo = await todoService.deleteTodo(id);
    res.status(201).json({message:"done"}) 
}