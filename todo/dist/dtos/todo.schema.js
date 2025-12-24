import { z } from "zod";
export const CreateTodoSchema = z.object({ title: z.string().min(1, "title is required") });
//# sourceMappingURL=todo.schema.js.map