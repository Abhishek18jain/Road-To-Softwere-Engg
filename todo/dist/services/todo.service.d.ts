import { todo } from "../types/todo.type.js";
import { CreateTodoDTO, UpdateTodoDTO } from "../dtos/todo.dto.js";
export declare class TodoService {
    todos: todo[];
    create(data: CreateTodoDTO): todo;
    findAll(): todo[];
    update(id: number, data: UpdateTodoDTO): todo | null;
    delete(id: number): boolean;
}
//# sourceMappingURL=todo.service.d.ts.map