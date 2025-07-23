import express from "express";

import cors from "cors"
const app=express();

// ✅ Allow multiple frontends
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like Postman) or from allowed origins
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true // needed for cookies/auth
}));

// ✅ Handle preflight requests for all routes
app.options('/*splate', cors());
//ap.use mainly use fr stup middleware

app.use(express.urlencoded({ extended: true }));

// Parse JSON (if needed)
app.use(express.json());
app.use(express.static("public"))

//routess

import Formrouter from "./routes/reservationRoutes.js";
import adminRouter from "./routes/adminRoute.js"
app.use("/api/form",Formrouter)
app.use("/api/admin",adminRouter)

export {app}