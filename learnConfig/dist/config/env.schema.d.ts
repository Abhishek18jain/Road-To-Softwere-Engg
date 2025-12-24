import z from "zod";
export declare const envSchema: z.ZodObject<{
    PORT: z.z.ZodCoercedNumber<unknown>;
    JWT_SECRET: z.ZodString;
}, z.z.core.$strip>;
//# sourceMappingURL=env.schema.d.ts.map