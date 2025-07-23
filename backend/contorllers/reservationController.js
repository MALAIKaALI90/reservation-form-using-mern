import { Reservation } from "../model/reservationModel.js";
const createReaservation=async (req,res) => {
 
    try {
        const {name,email,phone,date,guest,time}=req.body;
        if (!name||!email||!phone||!date||!time||!guest) {
            return res.json({success:false,message:"all Fields are required"})
            
        }
        const newReservation=await Reservation.create({
            name,
            email,
            phone,
            date,
            guest,
            time
        })
      await  newReservation.save()
       return res.json({success:true,message:"Reservation confirmed",newReservation})
            
    } catch (error) {
        console.log(error);
        res.json({message:error.message})
    }
}
const getAllReservation=async (req,res) =>{
  try {
      const Reservations=await Reservation.find()
      
      res.json(Reservations)
      
  }
  catch (error) {
    

    res.json({message:"error fetching reservation"})
  }}
const cancelReservation = async (req, res) => {
  try {
    const { id } = req.params;
 const constamer=   await Reservation.findByIdAndDelete(id);
    if (!constamer) {
        res.status(401).json({message:"there is not such id"})
        
    }
    res.status(200).json({ message: "Reservation cancelled successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const updateReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Reservation.findByIdAndUpdate(id,  { $set: req.body }, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
export {createReaservation,getAllReservation,cancelReservation,updateReservation}

