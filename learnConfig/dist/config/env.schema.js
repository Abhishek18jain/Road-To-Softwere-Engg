import z from "zod";
export const envSchema = z.object({
    PORT: z.coerce.number(),
    JWT_SECRET: z.string().min(10)
});
//# sourceMappingURL=env.schema.js.map