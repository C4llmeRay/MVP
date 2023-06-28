const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const AuthController = require('../controllers/authController')
// POST /users/register
// Register a new user
router.post(
  '/register',
    AuthController.registerUser
);

// POST /api/users/login
// User login 
 router.post('/login', AuthController.loginUser
);

module.exports= {
  routes:router
}