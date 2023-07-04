const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new mongoose.Schema({
  airline: { type: String, required: true },
  enum: ["American", "Southwest", "United", "Delta"],

  airport: { type: String, required: true },
  enum: ["YYZ", "SJD", "DEN", "LAX", "SAN"],

  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },

  departs: {
    type: Date,
    default: function () {
      return new Date().getFullYear();
    },
    min:2023
  },
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);