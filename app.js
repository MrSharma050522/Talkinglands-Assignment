const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/points", require("./routes/pointRoutes"));
app.use("/api/polygons", require("./routes/polygonRoutes"));

// Default route
app.get("/", (req, res) => {
	res.send("Spatial API is running...");
});

module.exports = app;
