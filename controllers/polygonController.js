const Polygon = require("../models/polygonModel");

// Create a new Polygon
exports.createPolygon = async (req, res) => {
	try {
		const { name, coordinates } = req.body;

		const polygon = new Polygon({
			name,
			boundary: { type: "Polygon", coordinates },
		});

		await polygon.save();
		res.status(201).json({ success: true, data: polygon });
	} catch (error) {
        console.error("Error -> ", error);
		res.status(500).json({
			success: false,
			message: "Server Error",
			error,
		});
	}
};

// Get all Polygons
exports.getPolygons = async (req, res) => {
	try {
		const polygons = await Polygon.find();
		res.status(200).json({ success: true, data: polygons });
	} catch (error) {
        console.error("Error -> ", error);
		res.status(500).json({
			success: false,
			message: "Server Error",
			error,
		});
	}
};
