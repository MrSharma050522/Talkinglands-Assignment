const mongoose = require("mongoose");

// Schema for storing Point data using GeoJSON
const pointSchema = new mongoose.Schema({
	name: { type: String, required: true },
	location: {
		type: {
			type: String,
			enum: ["Point"],
			required: true,
			default: "Point",
		},
		coordinates: { type: [Number], required: true }, // [longitude, latitude]
	},
});

// Create GeoSpatial index for efficient querying
pointSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Point", pointSchema);
