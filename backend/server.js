import connectDB from "./config/mongodb.js";
import 'dotenv/config'
import express from "express"
import { app } from "./app.js";
 const port=8000
connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(` server ruunning on port ${port}`);
        
    })

})
.catch((err)=>{

    console.log( err.message,"cant connect to db");
})