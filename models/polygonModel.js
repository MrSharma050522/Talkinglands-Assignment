const mongoose = require("mongoose");

// Schema for storing Polygon data using GeoJSON
const polygonSchema = new mongoose.Schema({
	name: { type: String, required: true },
	boundary: {
		type: {
			type: String,
			enum: ["Polygon"],
			required: true,
			default: "Polygon",
		},
		coordinates: { type: [[[Number]]] }, // [[[longitude, latitude], ...]] for polygons
	},
});

// Create GeoSpatial index
polygonSchema.index({ boundary: "2dsphere" });

module.exports = mongoose.model("Polygon", polygonSchema);
