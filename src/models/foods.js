const mongoose = require('mongoose');

const { Schema } = mongoose;

const foodSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = foodSchema;

