import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGON,
    credentials : true
}))

app.use(express.json({limit :"16kb"}));
app.use(express.urlencoded({extended : true,limit :"16kb"}));
app.use(express.static("publicfolder"));
app.use(cookieParser());


// import routes 
import userRouter from "./routes/user.router.js";

// routes declaration
app.use("/api/v1/user", userRouter);





export default app;
 