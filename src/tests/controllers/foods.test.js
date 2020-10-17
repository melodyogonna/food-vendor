const { AddFood, ReturnFood } = require('../../controllers/foodController');
const { mongoose } = require('../../models');
const { FoodDetails } = require('../dummyInformations');

describe('Food record is being added', function () {
  let foodId;

  afterAll(async () => {
    mongoose.deleteModel(/.+/);
    await mongoose.disconnect();
  });

  test('New food is add to document', async () => {
    const details = FoodDetails();
    const newFood = await AddFood(details);

    foodId = newFood.id;

    expect(newFood.name).toBe(details.name);
  });

  test('One food is retured with id', async () => {
    const food = await ReturnFood(foodId);
    expect(food.id).toEqual(foodId);
  });
});
