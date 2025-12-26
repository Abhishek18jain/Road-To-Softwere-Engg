import  express from "express";
import { TodoRouter } from "./routes/todo.routes.js";
export const app = express();

app.use(express.json());
app.use("/api", TodoRouter);

