import { z } from "zod";
export declare const createTodoSchema: z.ZodObject<{
    body: z.ZodObject<{
        title: z.ZodString;
        userId: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=todo.schema.d.ts.map