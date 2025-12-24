import { Request , Response  } from "express";
import { TodoService } from "../services/todo.service.js";
import { number } from "zod";
import { todoId } from "../dtos/todo.dto.js";

const service = new TodoService;

export function CreateTodo(req:Request , res:Response){
    console.log("done")
  const todo = service.create(req.body)

    console.log("done")
  res.status(201).json(todo)
}
export function getTodo(req:Request , res: Response){
  const todo = service.findAll();
  return res.json(todo);
}
export function updateTodo(req:Request , res:Response){
const id = todoId.parse(req.params.id)
  const todo = service.update(id , req.body);
  console.log(todo)
  if(!todo){
     return res.status(404).json({ message: "Todo not found" });
  }
  console.log("done")
  return res.json(todo);
}
export function deleteTodo(req:Request , res:Response){
const id = todoId.parse(req.params.id)
const todo = service.delete(id);
if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json({ message: "Todo deleted" });


}