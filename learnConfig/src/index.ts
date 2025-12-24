import express from "express";
import "dotenv/config"
import { config } from "./config/index.js";

const app = express();

app.get("/" , (req, res)=>{
    res.send("chill")

})

app.listen(config.port, ()=>{
    console.log("server is activated at" , config.port)
})