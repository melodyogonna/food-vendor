const { users } = require("../models");

async function AddUser(details) {
    const { email } = details;

    if (email) {
        const user = await users.findOne({ email });
        if (user) {
            throw new Error('Email already exist')
        }
    }

    const user = await users.create(details);

    return user;
}


module.exports = { AddUser }