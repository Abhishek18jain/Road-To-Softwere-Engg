import express from "express";
import todo from "./routes/todo.js";
const app = express();
app.use(express.json());
app.use("/todo", todo);
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
//# sourceMappingURL=app.js.map