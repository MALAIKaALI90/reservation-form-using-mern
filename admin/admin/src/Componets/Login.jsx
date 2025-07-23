import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';


const Login = ({setToken}) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

const onSubmitHandle=async (e) => {
try {
    e.preventDefault()
  const response=await axios.post("http://localhost:8000/api/admin/login",formData)
  if (response.data.success) {
    console.log(response);
    setToken(response.data.token)
    
    
  }
  else{
    toast.error(response.data.message)
  }
  
} catch (error) {
  console.log(error.message);
  
}
  
}
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Admin Login</h1>
        <form onSubmit={onSubmitHandle} className="space-y-4">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
