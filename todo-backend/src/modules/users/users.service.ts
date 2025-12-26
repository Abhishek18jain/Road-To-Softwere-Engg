// import { email } from "zod";
import { prisma } from "../../config/prisma";

export const userCreateService = async(email:string , name : string)=>{
    return prisma.user.create({
        data : {
            email , name
        }
    })
} 
export const userDeleteService = async(email:string)=>{
    return prisma.user.delete({
        where:{email}
    })
}