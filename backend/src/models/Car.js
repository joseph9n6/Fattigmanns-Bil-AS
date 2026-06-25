const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    brand: {
      type: String,
      required: true,
      trim: true,
    },

    model: {
      type: String,
      required: true,
      trim: true,
    },

    year: {
      type: Number,
      required: true,
      min: 1900,
      max: new Date().getFullYear() + 1,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    mileage: {
      type: Number,
      required: true,
      min: 0,
    },

    fuelType: {
      type: String,
      required: true,
      enum: ["Bensin", "Diesel", "Elektrisk", "Hybrid", "Annet"],
    },

    transmission: {
      type: String,
      required: true,
      enum: ["Manuell", "Automat"],
    },

    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 3000,
    },

    status: {
      type: String,
      enum: ["AVAILABLE", "SOLD", "DRAFT"],
      default: "AVAILABLE",
    },

    images: [
      {
        fileId: {
          type: mongoose.Schema.Types.ObjectId,
        },
        filename: {
          type: String,
        },
        contentType: {
          type: String,
        },
      },
    ],

    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", carSchema);