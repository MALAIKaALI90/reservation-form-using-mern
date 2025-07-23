import Jwt from "jsonwebtoken";

import { User } from "../model/user.model.js";
 const auth=asyncHandler(async (req,res,next) => {
 try {
       const token = req.cookies?.token;
       console.log("token1",token);
       
   if (!token) {
       throw new ApiError(401,"Token not found")
       
   }
   const decoded=Jwt.verify(token, process.env.JWT_SECRET)
   if (token_decoded!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASS) {
    return res.json({
        success:false,message:"User is not authorize"
    })
   }



   next()
 } catch (error) {
    throw new ApiError(500,"somethind went wrong in server")
 }
 }) 
 export {auth}
 
