const mongoose = require('mongoose');

const foodSchema = require('./foods');
const orderSchema = require('./orders');
const userSchema = require('./users');

mongoose.connect('mongodb://localhost/saucefoods', { useNewUrlParser: true });

const foods = mongoose.model('foods', foodSchema);
const users = mongoose.model('users', userSchema);
const orders = mongoose.model("orders", orderSchema);

module.exports = { users, foods, orders, mongoose };

