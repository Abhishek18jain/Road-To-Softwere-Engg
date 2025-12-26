import { title } from "node:process";
import { prisma } from "../../config/prisma.js";

import { createTodoInput } from "./todo.types.js";

export const createTodo = async (data : createTodoInput)=>{
    return prisma.todo.create({
        data,
    })
}
export const getTodo = async ()=>{
return prisma.todo.findMany();
}
export const getTodoId = async (id : number)=>{
return prisma.todo.findUnique({
    where : {id}
})
}
export const deleteTodo = async(id:number)=>{
    return prisma.todo.delete({
        where : {id}
    })
}
export const updateTodo = async(id:number , title : string)=>{
    return prisma.todo.update({
        where : {id},
        data:{
            title   
        }
    })
}