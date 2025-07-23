import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <>
    <nav className="bg-white shadow-md p-4 flex items-center justify-between">
      <h2 className="text-2xl font-bold text-green-800">Cafe Reservation</h2>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li className="hover:text-green-700 cursor-pointer transition duration-300">Home</li>
     <Link
  to="/reservation-form"
  className="hover:text-green-700 cursor-pointer transition duration-300"
>
  Reservation
</Link>
        <button
   
          className="hover:text-green-700 cursor-pointer transition duration-300 bg-transparent border-none"
        >
          Logout
        </button>
      </ul>
    </nav>
  
    </>
  
)}

export default Navbar
