import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config();
const app = express();
app.use(express.json())


// app.get("/", (req,res) => {
//     res.send("server is started...");
// })

const connection = async () => {
    try{
        const mongoDB = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MONGO DB connected ${mongoDB.connection.host}`)
    } catch (error){
        console.log(error)
    }
}


const backendPort = 8000;

app.listen(backendPort,()=>{
    connection();
    console.log(`Server started at port ${backendPort}`);

})