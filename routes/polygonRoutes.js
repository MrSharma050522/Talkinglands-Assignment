const express = require("express");
const router = express.Router();
const {
	createPolygon,
	getPolygons,
} = require("../controllers/polygonController");

router.post("/", createPolygon);
router.get("/", getPolygons);

module.exports = router;
