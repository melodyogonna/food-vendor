const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    fullname: String,
    email: String,
    isAdmin: { type: Boolean, default: false },
    password: String
});

module.exports = userSchema;