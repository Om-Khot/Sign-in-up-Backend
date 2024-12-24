import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";

async function connectDB(){
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to Mongodb successfully");
    } catch (error) {
        console.log(error);
        console.log("Fail to connect the DB");
    }    
};

export default connectDB;