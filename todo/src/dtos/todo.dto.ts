import {z} from "zod/v3";
import { todo } from "../types/todo.type.js";

export const CreateTodoSchema = z.object({title : z.string().min(1, "title is required")}

)
export type CreateTodoDTO = z.infer<typeof CreateTodoSchema>

export const UpdateTodoSchema = z.object({
  
    title:z.string().min(1).optional(),
    completed : z.boolean().optional(),


 })

 export type UpdateTodoDTO = z.infer<typeof UpdateTodoSchema>

 export const todoId = z.coerce.number().int().positive()
 export type todoIdDTO = z.infer<typeof todoId>