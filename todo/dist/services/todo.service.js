export class TodoService {
    todos = [];
    create(data) {
        const Todo = {
            id: Date.now(),
            title: data.title,
            completed: false
        };
        this.todos.push(Todo);
        console.log("done");
        return Todo;
    }
    // getAll
    findAll() {
        return this.todos;
    }
    // update
    update(id, data) {
        const Todo = this.todos.find((t) => t.id === id);
        if (!Todo)
            return null;
        Object.assign(Todo, data);
        return Todo;
    }
    //  delete 
    delete(id) {
        const index = this.todos.findIndex((t) => t.id === id);
        if (index === -1) {
            return false;
        }
        this.todos.splice(index, 1);
        return true;
    }
}
//# sourceMappingURL=todo.service.js.map