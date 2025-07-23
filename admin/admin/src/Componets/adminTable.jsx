import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';

const AdminTable = () => {
  const [reservations, setReservations] = useState([]);
const handleDelete=async(id)=>{
  try {
    
    
    await axios.delete(`http://localhost:8000/api/form/delete/${id}`)
    toast.success(`Reservation delete successfully`)
    setReservations(prev=>prev.filter(reserve=>reserve._id===id))
  } catch (error) {
    console.log(error.message);
    
  }
}


// Inside your component:

// At the top of your component
const [editableId, setEditableId] = useState(null); // ID of the row being edited
const [time, setTime] = useState("");
const [date, setDate] = useState("");
const [guest, setGuest] = useState("");


const handleUpdate = async (id) => {
  try {
    const updatedData = {
      time,
      date,
      guest,
     
    };

    const response = await axios.put(`http://localhost:8000/api/form/update/${id}`, updatedData);
    toast.success("Reservation updated successfully");

    // Update local state
    setReservations((prev) =>
      prev.map((reserve) =>
        reserve._id === id ? { ...reserve, ...updatedData } : reserve
      )
    );

    setEditableId(null); // close editing mode
  } catch (error) {
    console.error("Update error:", error.message);
    toast.error("Failed to update reservation.");
  }
};



  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/form/get");
        setReservations(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };
    fetch();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Admin Panel - Reservations
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Phone</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Time</th>
              <th className="py-3 px-6 text-left">Guests</th>
              <th className="py-3 px-6 text-center">Delete</th>
              <th className="py-3 px-6 text-center">Update</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {reservations.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
                  No reservations found.
                </td>
              </tr>
            ) : (
              reservations.map((reserve, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition duration-200"
                >
                  <td className="py-3 px-6">{reserve.name}</td>
                  <td className="py-3 px-6">{reserve.email}</td>
                  <td className="py-3 px-6">{reserve.phone}</td>
        {/* DATE */}
      <td className="py-3 px-6">
        {editableId === reserve._id ? (
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        ) : (
          reserve.date
        )}
      </td>

      {/* TIME */}
      <td className="py-3 px-6">
        {editableId === reserve._id ? (
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        ) : (
          reserve.time
        )}
      </td>

      {/* GUEST */}
      <td className="py-3 px-6">
        {editableId === reserve._id ? (
          <input
            type="number"
            value={guest}
            onChange={(e) => setGuest(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        ) : (
          reserve.guest
        )}
      </td>

      {/* DELETE */}
      <td className="py-3 px-6 text-center">
        <button
          onClick={() => handleDelete(reserve._id)}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded"
        >
          Delete
        </button>
      </td>

      {/* UPDATE BUTTON */}
      <td className="py-3 px-6 text-center">
        {editableId === reserve._id ? (
          <button
            onClick={() => handleUpdate(reserve._id)}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-3 rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => {
              setEditableId(reserve._id);
              setDate(reserve.date);
              setTime(reserve.time);
              setGuest(reserve.guest);
        
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded"
          >
            Edit
          </button>
        )}
      </td>

                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
