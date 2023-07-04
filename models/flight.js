const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

// ONE flight HAS MANY destinations
// A destination BELONGS TO A flight
// is the relationship for the destinations and flights

// if your embedding, you always
// write the many (side) schema (destinations)
// in the One side (in this case flight)
const destinationSchema = new Schema(
  {
    airport: { type: String, required: true },
    enum: ["SAN", "DEN", "SJD", "LPIA", "CUN"],
    arrival: {
      type: Date,
      default: function () {
        return new Date().getFullYear();
      },
      min: 2023,
    },
  },
  {
    timestamps: true,
  }
);

//one flight
const flightSchema = new mongoose.Schema({
  airline: { type: String, required: true },
  enum: ["American", "Southwest", "United", "Delta"],

  airport: { type: String, required: true },
  enum: ["SAN", "DEN", "SJD", "LPIA", "CUN"],

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
    min: 2023,
  },

  destinations:[destinationSchema],
  airport: { type: String, required: true },
  enum: ["SAN", "DEN", "SJD", "LPIA", "CUN"],
  arrival: {
    type: Date,
    default: function () {
      return new Date().getFullYear();
    },
    min: 2023,
  },
},
{
  timestamps: true,
},

);

// Compile the schema into a model and export it
module.exports = mongoose.model("Flight", flightSchema);
