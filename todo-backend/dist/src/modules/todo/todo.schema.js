"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodoSchema = void 0;
const zod_1 = require("zod");
exports.createTodoSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        userId: zod_1.z.number()
    })
});
//# sourceMappingURL=todo.schema.js.map