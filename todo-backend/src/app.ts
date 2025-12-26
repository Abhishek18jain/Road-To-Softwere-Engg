import express from "express";
import {userRouter} from "./modules/users/user.routes"
import {todoRouter} from "./modules/todo/todo.routes"
import {errorMiddleware} from "./midddleware/errorMiddleware"

export const app = express();

app.use("/users" ,userRouter)
app.use("/todo" ,todoRouter )
app.use(errorMiddleware)