const express = require('express');
const router = require('express').Router();

const { AddFood, RemoveFood, ReturnFood } = require('../controllers/foodController');
const { foods } = require('../models');

router.use(express.json());

router.get('/', async (request, response) => {
  const allfoods = await foods.find();
  return response.status(200).json({ foods: allfoods });
})

router.get('/:id', async (request, response) => {
  const { id } = request.params;

  const food = await ReturnFood(id);
  return response.status(200).json({ food });
});

router.post('/add-food', async (request, response) => {
  const newFood = await AddFood(request.body);

  return response.status(201).json(newFood);
});

router.delete('/delete-food/:id', (request, response) => {
  const { id } = request.params;
  RemoveFood(id);
  return response.status(200).json({ id });
});

module.exports = router;
