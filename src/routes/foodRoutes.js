const express = require('express');
const router = require('express').Router();

const { AddFood, RemoveFood } = require('../controllers/foodController');

router.use(express.json());

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
