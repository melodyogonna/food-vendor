const mongoose = require("mongoose");
const foodSchema = require("./foods");
const userSchema = require("./users");

const { Schema } = mongoose;

const orderSchema = new Schema({
    foods: [foodSchema],
    user: userSchema,
    orderId: String
})

module.exports = orderSchema;