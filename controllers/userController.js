const userModel = require("../models/userModels")

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await userModel.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }
};


// create user 
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = await userModel.create({ name, email, password });
        res.status(201).json({ message: "User created", newUser });
        console.log(req.body)
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


module.exports = { getUsers, createUser }