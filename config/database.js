import mongoose  from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const connectdb = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB Connected Sucssesfully");
        
    } catch (error) {
        console.log("MongoDB Eroor");
        console.error(error);
        
    }
}
export default connectdb;