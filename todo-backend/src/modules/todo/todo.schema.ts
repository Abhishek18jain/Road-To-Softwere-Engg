import { title } from "node:process";
import {z} from "zod";

export const createTodoSchema = z.object({
    body : z.object({
        title:z.string(),
        userId:z.number()
        
    })
})