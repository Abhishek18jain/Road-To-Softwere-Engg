import { z } from "zod";
export declare const CreateTodoSchema: z.ZodObject<{
    title: z.ZodString;
}, z.core.$strip>;
export type CreateTodoDTO = z.infer<typeof CreateTodoSchema>;
//# sourceMappingURL=todo.schema.d.ts.map