const { foods } = require('../models');

async function AddFood(values) {
  try {
    const food = await foods.create(values);
    return food;
  } catch (e) {
    /* handle error */
    console.log(e);
  }
}

async function ReturnFood(id) {
  return foods.findById(id);
}

async function RemoveFood(id) {
  return foods.findOneAndDelete(id);
}

module.exports = { AddFood, RemoveFood, ReturnFood };
