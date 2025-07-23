import  express from "express"
import { cancelReservation, createReaservation, getAllReservation, updateReservation } from "../contorllers/reservationController.js";
// import { Adminauth } from "../middleware/AdminAuth.js";
const Formrouter=express.Router();

Formrouter.post("/create",createReaservation)
Formrouter.get("/get",getAllReservation)
Formrouter.delete("/delete/:id",cancelReservation)
Formrouter.put("/update/:id",updateReservation)


export default Formrouter;
