// routes/userRoutes.js
const express = require('express');
const { getUsers, createUser } = require('../controllers/userController');

const userRouter = express.Router();

// CRUD Routes
userRouter.get("/", getUsers);
userRouter.post("/", createUser);

module.exports = { userRouter };
