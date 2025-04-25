// console.log("hi from index")
import express from "express"
import dotenv from "dotenv"
import connection from "./db.js";
import AllRoutes from "./routes/index.js";

const app = express();
app.use(express.json())
dotenv.config()

app.get("/", (req,res)=> {
    res.send("Welcome to express")
})

app.use("/api", AllRoutes)

const backendPort = 8000;

app.listen(backendPort, ()=> {
    connection();
    console.log(`Server is started at port ${backendPort}`)
})