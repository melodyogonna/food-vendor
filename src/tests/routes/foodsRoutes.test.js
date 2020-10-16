const supertest = require('supertest');

const { mongoose } = require('../../models');
const { FoodDetails } = require('../dummyInformations');

const app = require('../../index');

describe('Food record is being added', function () {
  afterAll(async function () {
    mongoose.deleteModel(/.+/);
    await mongoose.disconnect();
  });
  test('Test that add food route is working', async () => {
    const details = FoodDetails();
    const newFood = await supertest(app)
      .post('/api/v1/foods/add-food')
      .send(FoodDetails());

    expect(newFood.status).toBe(201);
    expect(newFood.body.name).toBe(details.name);
  });
});
