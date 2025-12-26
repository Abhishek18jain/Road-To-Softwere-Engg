import {z} from "zod";

export const userSchema = z.object({
    body : z.object({
            email: z.string(),
    name: z.string().min(2),
    })
})