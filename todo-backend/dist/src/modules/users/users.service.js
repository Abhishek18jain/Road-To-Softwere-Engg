"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDeleteService = exports.userCreateService = void 0;
// import { email } from "zod";
const prisma_1 = require("../../config/prisma");
const userCreateService = async (email, name) => {
    return prisma_1.prisma.user.create({
        data: {
            email, name
        }
    });
};
exports.userCreateService = userCreateService;
const userDeleteService = async (email) => {
    return prisma_1.prisma.user.delete({
        where: { email }
    });
};
exports.userDeleteService = userDeleteService;
//# sourceMappingURL=users.service.js.map