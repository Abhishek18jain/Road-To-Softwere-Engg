"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodoByUser = exports.createTodo = void 0;
// import { title } from "node:process";
const prisma_1 = require("../../config/prisma");
const createTodo = async (title, userId) => {
    return prisma_1.prisma.todo.create({
        data: {
            title, userId
        }
    });
};
exports.createTodo = createTodo;
const getTodoByUser = async (userId) => {
    return prisma_1.prisma.todo.findMany({
        where: { userId }
    });
};
exports.getTodoByUser = getTodoByUser;
//# sourceMappingURL=todo.service.js.map