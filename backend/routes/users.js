const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const AuthController = require("../controllers/authController");

// Register a new user
router.get("", AuthController.getCurrentUser);

router.post(
  "/register",

  AuthController.registerUser
);

// User login
router.post("/login", AuthController.loginUser);

// Get user by ID
router.get("/:id", AuthController.getUserById);

// Update user by ID
router.put("/:id", AuthController.updateUser);

//this is for push testing

module.exports = {
  routes: router,
};
