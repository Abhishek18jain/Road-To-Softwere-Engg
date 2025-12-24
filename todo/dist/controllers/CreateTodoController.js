import { TodoService } from "../services/todo.service.js";
import { todoId } from "../dtos/todo.dto.js";
const service = new TodoService;
export function CreateTodo(req, res) {
    console.log("done");
    const todo = service.create(req.body);
    console.log("done");
    res.status(201).json(todo);
}
export function getTodo(req, res) {
    const todo = service.findAll();
    return res.json(todo);
}
export function updateTodo(req, res) {
    const id = todoId.parse(req.params.id);
    const todo = service.update(id, req.body);
    console.log(todo);
    if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
    }
    console.log("done");
    return res.json(todo);
}
export function deleteTodo(req, res) {
    const id = todoId.parse(req.params.id);
    const todo = service.delete(id);
    if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
    }
    res.json({ message: "Todo deleted" });
}
//# sourceMappingURL=CreateTodoController.js.map