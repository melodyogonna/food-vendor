
const mongoose = require("mongoose");

const { Schema } = mongoose;

const foodSchema = new Schema({
    name: String,
    price: String,
    available: { type: Boolean, default: true }
});

module.exports = foodSchema;