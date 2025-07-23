import mongoose from "mongoose";
import  Mongoose,{Schema } from "mongoose";
const userSchema= new Schema ({
    username:{
        type:String,
        require:[true,"provide username"]
    },
    email:{
        type:String,
require:[true,"provide email"],
unique:true

    },
    password:{
        type:String,
        require:[true,"provide password"]
    },

role:{
    type:String,
    enum:["ADMIN","USER"],
    default:"ADMIN"
}
},{timestamps:true})
export const User=mongoose.model("User",userSchema)