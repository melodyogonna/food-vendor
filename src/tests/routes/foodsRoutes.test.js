const supertest = require('supertest');

const { mongoose } = require('../../models');
const { FoodDetails } = require('../dummyInformations');

const app = require('../../index');
const { AddFood } = require('../../controllers/foodController');

describe('Food record is being added', function () {
  afterAll(async function () {
    mongoose.deleteModel(/.+/);
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

describe('Food record is being deleted', function () {
  let food;
  beforeAll(async function () {
    food = await AddFood(FoodDetails('Ofe Akwu'));
  });
  afterAll(async function () {
    mongoose.deleteModel(/.+/);
    await mongoose.disconnect();
  });
  test('Test that delete food route is working', async () => {
    const deleted = await supertest(app).delete(
      // eslint-disable-next-line no-underscore-dangle
      `/api/v1/foods/delete-food/${food._id}`
    );

    expect(deleted.status).toBe(200);
  });
});
