import mongoose from "mongoose";
import { db_name } from "../constant.js";

const dbconnect = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`, {
           
        });

        console.log(`Connected successfully to the database: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Connection Failed due to Error:", error);
        process.exit(1);
    }
};

export default dbconnect;
