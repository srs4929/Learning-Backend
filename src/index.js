import mongoose from "mongoose"
import { db_name } from "./constants.js"
import express from "express"
import dotenv from "dotenv";
import connectdb from "./db/index.js";


dotenv.config(
   {
    path:"./.env"
   } 
);
console.log("MongoDB URL:", `"${process.env.MONGODB_URL}"`); // Debugging
connectdb()


/*const app=express()

(async()=>{
    try
    {
        await mongoose.connect(`${process.env.MONGODB_URL}/${db_name}`)
        app.on("error",(error)=>{
            console.log("Err :"+error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log("App is listening")
        })
    }
    catch(error)
    {
        console.error("Error: ",error)
        throw error
    }
})()*/