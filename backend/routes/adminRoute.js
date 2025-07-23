import  express from "express"
import { adminLogin } from "../contorllers/user.controller.js";

const adminRouter=express.Router();

adminRouter.post("/login",adminLogin)
export default adminRouter