const express = require("express");
const router = express.Router();
const { createPoint, getPoints } = require("../controllers/pointController");

router.post("/", createPoint);
router.get("/", getPoints);

module.exports = router;
