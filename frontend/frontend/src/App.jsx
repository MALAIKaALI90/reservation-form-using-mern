import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import ReservationForm from "./Components/ReservationForm"
import{Routes,Route} from "react-router-dom"

import {ToastContainer} from "react-toastify"
function App() {


  return (
  <>
<ToastContainer/>
<Navbar/>
   <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/reservation-form" element={<ReservationForm />} />

    
    </Routes>

  <Footer/>
 </>
  )}
export default App