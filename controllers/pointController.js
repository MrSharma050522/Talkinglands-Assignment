const Point = require("../models/pointModel");

// Create a new Point
exports.createPoint = async (req, res) => {
	try {
		const { name, coordinates } = req.body;

		const point = new Point({
			name,
			location: { type: "Point", coordinates },
		});

		await point.save();
		res.status(201).json({ success: true, data: point });
	} catch (error) {
        console.error("Error -> ", error);
		res.status(500).json({
			success: false,
			message: "Server Error",
			error,
		});
	}
};

// Get all Points
exports.getPoints = async (req, res) => {
	try {
		const points = await Point.find();
		res.status(200).json({ success: true, data: points });
	} catch (error) {
        console.error("Error -> ", error);
		res.status(500).json({
			success: false,
			message: "Server Error",
			error,
		});
	}
};
