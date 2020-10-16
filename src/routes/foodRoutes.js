const express = require('express');
const { AddFood } = require('../controllers/foodController');
const router = require('express').Router();

router.use(express.json());

router.post('/add-food', async (request, response) => {
  const newFood = await AddFood(request.body);
  return response.status(201).json(newFood);
});

module.exports = router;
