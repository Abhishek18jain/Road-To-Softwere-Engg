import { z } from "zod/v3";
export declare const CreateTodoSchema: z.ZodObject<{
    title: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
}, {
    title: string;
}>;
export type CreateTodoDTO = z.infer<typeof CreateTodoSchema>;
export declare const UpdateTodoSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    completed: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    completed?: boolean | undefined;
}, {
    title?: string | undefined;
    completed?: boolean | undefined;
}>;
export type UpdateTodoDTO = z.infer<typeof UpdateTodoSchema>;
export declare const todoId: z.ZodNumber;
export type todoIdDTO = z.infer<typeof todoId>;
//# sourceMappingURL=todo.dto.d.ts.map