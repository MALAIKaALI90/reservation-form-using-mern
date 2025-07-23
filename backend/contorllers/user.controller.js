import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const adminLogin = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Validate fields
    if (!username || !password || !email) {
      return res.status(401).json({ success: false, message: "All fields are required" });
    }

    // Check if email and password match admin
    if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASS) {
      return res.status(401).json({ success: false, message: "Invalid admin credentials" });
    }



    // Create token with payload
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1d" });
    console.log("token", token);

    // Set token cookie
    const cookieOptions = {
      httpOnly: true,
      secure: false, // Set to true in production with HTTPS
    };
    res.cookie("AccessToken", token, cookieOptions);

    // Save user to DB if needed (optional - usually login doesn't create user)
    const user = new User({
      username: username,
      email: email,
      password
    });
    await user.save();

    // Send response
    return res.status(200).json({
      success: true,
      message: "Admin login successful",
      token,
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export { adminLogin };
