"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("./modules/users/user.routes");
const todo_routes_1 = require("./modules/todo/todo.routes");
const errorMiddleware_1 = require("./midddleware/errorMiddleware");
exports.app = (0, express_1.default)();
exports.app.use("/users", user_routes_1.userRouter);
exports.app.use("/todo", todo_routes_1.todoRouter);
exports.app.use(errorMiddleware_1.errorMiddleware);
//# sourceMappingURL=app.js.map