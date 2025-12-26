// import { title } from "node:process";
import { prisma } from "../../config/prisma";

export const createTodo =  async (title:string , userId : number)=>{
    return prisma.todo.create({
        data:{
            title,userId
        }
    })
}

export const getTodoByUser = async (userId : number)=>{
    return prisma.todo.findMany({
        where:{userId}
    })
}