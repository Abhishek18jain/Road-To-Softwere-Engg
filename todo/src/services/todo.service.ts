import { todo } from "../types/todo.type.js";
import { CreateTodoDTO , UpdateTodoDTO } from "../dtos/todo.dto.js";

export class TodoService {
    
    todos: todo[]= [];
    
    create(data:CreateTodoDTO):todo {
        const Todo : todo = {
            id:Date.now(),
            title : data.title,
            completed:false
        }
this.todos.push(Todo);
console.log("done")
return Todo
    }
// getAll

findAll():todo[]{
    return this.todos
}
// update
 update( id : number , data:UpdateTodoDTO):todo | null{
    const Todo = this.todos.find((t) => t.id === id)
     if (!Todo) return null;
    Object.assign(Todo, data);
    return Todo;
 }
//  delete 
delete(id:number):boolean{
    const index = this.todos.findIndex((t)=> t.id === id);
    if (index === -1){
        return false;
    }
    this.todos.splice(index , 1)
    return true;
}
}