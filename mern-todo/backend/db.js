import mongoose from "mongoose";

const connection = async() => {
    try {
        const mongoDB = await mongoose.connect(process.env.MONGO_URI)
        if (mongoDB){
            console.log("MongoDB Connected");
        }
    } catch (error) {
        console.log(error)
    }
}

export default connection;