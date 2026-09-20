const express = require('express');

const db = require('../config/firebase');
const validateUser = require('../schema/userSchema');

const userRouter = express.Router();

userRouter.post('/users', async (req, res) => {

    const error = validateUser(req.body);

    if (error) {
        return res.status(400).send(error);
    }

    try {
        await db.collection('users').add(req.body);

        res.send('User stored successfully in Firestore');

    } catch (error) {
        res.status(500).send('Database error');
    }
});

module.exports = userRouter;