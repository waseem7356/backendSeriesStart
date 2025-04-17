import "dotenv/config";  
import dbconnect from "./db/database.js";
import app from "./app.js";
dbconnect()
.then(() => {
   
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server started successfully on port ${process.env.PORT}`);
    });
})
.catch((error) => { 
    console.error(" Error: Server failed to start", error);
});































































/*
this connection is    used in the index.js file we want to connect db from another script
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { db_name } from "./constant.js";


dotenv.config(); // Load environment variables

const app = express();
console.log("Starting the server...");
(async () => {
    console.log("Inside IIFE function...");
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`);
       //await mongoose.connect("mongodb://127.0.0.1:27017/db");
      
       

        console.log("Connected to MongoDB successfully!");

        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error("Database connection error:", error);
       // process.exit(1); // Exit process on failure
       throw error;
    }
})();

// Global error handling
app.on("error", (error) => {
    console.error("Express server error:", error);
    throw error;
});
console.log("Inside IIFE function...");

*/