import "dotenv/config"
import { env } from "./env.js";

export const config = {
    port : env.PORT,
jwt_secret : env.JWT_SECRET
}