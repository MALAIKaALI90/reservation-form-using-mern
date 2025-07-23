import mongoose from "mongoose";
 const connectDB=async () => {
 try {
    await mongoose.connect(`${process.env.MOGODB_URI}/menu`)
    console.log("suceessfully connect to DB");
    
 } catch (error) {
    console.log("connection error",error)
 }
 }
 export default connectDB


 