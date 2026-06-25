const express = require("express");
const Car = require("../models/Car");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cars = await Car.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: cars.length,
      cars,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Kunne ikke hente biler",
      error: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const car = await Car.create(req.body);

    res.status(201).json({
      success: true,
      message: "Bilen ble opprettet",
      car,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Kunne ikke opprette bilen",
      error: error.message,
    });
  }
});

module.exports = router;