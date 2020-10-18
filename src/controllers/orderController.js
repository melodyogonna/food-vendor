const { foods, users, orders } = require("../models");

const { generateRandomString } = require("../utils/helpers");

async function PlaceOrder(userId, foodIds) {
    if (!userId && foodIds.length < 1) {
        throw new Error('You have to pass in a user id, oh, and make sure you\'re not passing an empty food list')
    }


    const orderedFoods = await foods.find().where('_id').in(foodIds).exec();

    const user = await users.findById(userId);

    const orderId = generateRandomString(7);

    const order = await orders.create({ foods: orderedFoods, user, orderId });

    return order;
}

module.exports = { PlaceOrder };