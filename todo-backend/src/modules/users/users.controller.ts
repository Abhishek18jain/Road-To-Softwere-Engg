import { prisma } from "../../config/prisma";
import * as userService from "./users.service";
import { Request , Response , NextFunction } from "express";

export const userHandler = async(req:Request , res:Response , next :NextFunction)=>{
try {
    const {email , name } = req.body;
    const user = await userService.userCreateService(email, name)
    res.status(201).json(user)
} catch (error) {
    next(error)
    
}


}