import { z } from "zod/v3";
export const CreateTodoSchema = z.object({ title: z.string().min(1, "title is required") });
export const UpdateTodoSchema = z.object({
    title: z.string().min(1).optional(),
    completed: z.boolean().optional(),
});
export const todoId = z.coerce.number().int().positive();
//# sourceMappingURL=todo.dto.js.map