import express from "express";
import health from "./routes/healthroutes.js";

const app = express();

app.use(express.json());
app.use("/health", health);
app.get("/" , (req, res)=>{
    return res.send("im a string");
})

export default app;
