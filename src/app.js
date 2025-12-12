// Load environment variables
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Import Routes
const adminRoutes = require("./routes/adminRoutes");
const authRoutes = require("./routes/authRoutes");

// Create Express App
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running successfully!",
  });
});

// API Routes
app.use("/api/admin", adminRoutes);   // Admin-only routes
app.use("/api/auth", authRoutes);     // User login routes

// 404 Handler (Route Not Found)
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// Export App
module.exports = app;
