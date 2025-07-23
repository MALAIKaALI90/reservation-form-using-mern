import React, { useEffect, useState } from 'react';
import AdminTable from './Componets/adminTable';
import Login from './Componets/Login';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


const App = () => {
  // Get token from localStorage only if it's not "null"
  const [token, setToken] = useState(() => {
    const storedToken = localStorage.getItem("token");
    return storedToken && storedToken !== "null" ? storedToken : "";
  });

  // Update localStorage only when token is valid
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
      <Routes>
        <Route
          path="/login"
          element={
            !token ? <Login setToken={setToken} /> : <Navigate to="/admin" />
          }
        />
        <Route
          path="/admin"
          element={
            token ? <AdminTable token={token} setToken={setToken} /> : <Navigate to="/login" />
          }
        />
        {/* Default route: Redirect based on token */}
        <Route
          path="/"
          element={<Navigate to={token ? "/admin" : "/login"} />}
        />
      </Routes>
  
  );
};


export default App;
