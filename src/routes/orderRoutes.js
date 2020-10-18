const express = require('express');
const router = require("express").Router();

const { PlaceOrder } = require('../controllers/orderController');
const { orders } = require('../models');


router.use(express.json());

router.post('/place-order', async (request, response) => {
    const { customerId, orderDetails } = request.body;

    const order = await PlaceOrder(customerId, orderDetails);

    response.status(201).json({ order });
})

router.get('/', async (request, response) => {
    const allOrders = await orders.find({}).exec();

    return response.status(200).json({ allOrders });
})

module.exports = router;