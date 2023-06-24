const express = require("express");
const { getAllUsers, registerUser, userLogin } = require("../controllers/user.controller");


const userRoutes = express.Router();


userRoutes.get("/", getAllUsers); // Route for getting all users
userRoutes.post("/register", registerUser); // Route for registering a new user
userRoutes.post("/login", userLogin); // Route for login

module.exports = userRoutes;
