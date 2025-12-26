"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = require("express");
const todo_controller_1 = require("./todo.controller");
exports.todoRouter = (0, express_1.Router)();
exports.todoRouter.post("/", todo_controller_1.createTodoHandler);
//# sourceMappingURL=todo.routes.js.map