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
  beforeAll(async () => {
    food = await AddFood(FoodDetails('Ofe Akwu'));
  });
  afterAll(async () => {
    mongoose.deleteModel(/.+/);
  });
  test('Test that delete food route is working', async () => {
    const deleted = await supertest(app).delete(
      // eslint-disable-next-line no-underscore-dangle
      `/api/v1/foods/delete-food/${food._id}`
    );

    expect(deleted.status).toBe(200);
  });
});


describe('Food record is being returned', () => {

  let food;
  beforeAll(async () => {
    food = await AddFood(FoodDetails('Ofe Akwu'));
  })
  
  afterAll(async () => {
    mongoose.deleteModel(/.+/);
    await mongoose.disconnect();
  });

  test('test that route returning many foods is working', async () => {
    const foods = await supertest(app).get('/api/v1/foods/');

    expect(foods.status).toBe(200);
    expect(typeof foods.body.foods).toBe('object');
  })

  test('Test that route returning one food is working', async () => {
    const fd = await supertest(app).get(`/api/v1/foods/${food.id}`);

    expect(fd.status).toBe(200);
    expect(typeof fd.body.food).toBe('object')
    expect(fd.body.food).toHaveProperty('_id', food.id);
  })

})