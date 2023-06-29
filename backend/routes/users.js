const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const AuthController = require('../controllers/authController')

// Register a new user
router.post(
  '/users/register',
    AuthController.registerUser
);

// User login 
 router.post('/users/login', AuthController.loginUser
);

// Get user by ID
router.get('/:id', AuthController.getUserById);

// Update user by ID
router.put('/:id', AuthController.updateUser);




module.exports= {
  routes:router
}