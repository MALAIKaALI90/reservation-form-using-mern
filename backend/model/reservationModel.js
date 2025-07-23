import mongoose ,{ Schema}from "mongoose";
const reservationSchema=new Schema({
name:{
    type:String,
    required:[true,"provide your Full Name"]
},
email:{
    type:String,
    required:[true,"provide your Email"]
},
// password:{
//     type:String,
//     required:[true,"provide your Full Name"]
// },
phone:{
    type:String,
    required:[true,"provide your Phone number"]
},
date:{
    type:String,
    required:true
},
guest:{
    type:String,
    required:true
},
time:{
    type:String,
    required:true
}







},{timeStamps:true})
export const Reservation=mongoose.model("Reservation",reservationSchema)
