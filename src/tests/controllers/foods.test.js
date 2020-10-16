const { AddFood } = require('../../controllers/foodController');
const { mongoose } = require('../../models');
const { FoodDetails } = require('../dummyInformations');

describe('Food record is being added', function () {
  afterAll(async function () {
    mongoose.deleteModel(/.+/);
    await mongoose.disconnect();
  });
  test('New food is add to document', async () => {
    const details = FoodDetails();
    const newFood = await AddFood(details);

    expect(newFood.name).toBe(details.name);
  });
});
