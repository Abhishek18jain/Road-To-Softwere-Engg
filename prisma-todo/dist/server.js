import express from "express";
const app = express();
const port = 4000;
app.get("/", (req, res) => {
    res.send("hi ");
});
app.listen(port, () => {
    console.log("server is running");
});
//# sourceMappingURL=server.js.map