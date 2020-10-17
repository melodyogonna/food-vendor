const mongoose = require('mongoose');

const foodSchema = require('./foods');
const userSchema = require('./users');

mongoose.connect('mongodb://localhost/saucefoods', { useNewUrlParser: true });

const foods = mongoose.model('foods', foodSchema);
const users = mongoose.model('users', userSchema);

module.exports = { users, foods, mongoose };

