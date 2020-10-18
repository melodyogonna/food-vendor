const express = require("express");
const router = require("express").Router;


const { AddUser } = require("../controllers/userController");
const { users } = require("../models");

router.use(express.json())

router.post('/register', async (request, response) => {
    const user = await AddUser(request.body);

    return response.status(201).json({
        user,
    })
})

router.post('/login', async (request, response) => {
    const { email, password } = request.body;

    const user = await users.findOne({ email });

    if (!user) {
        return response.status(401).json({ "message": "Email is invalid" });
    }

    if (password !== user.password) {
        return response.status(401).json({ "message": "Password is incorrect" });
    }

    return response.status(200).json({
        user
    })

})

module.exports = router;