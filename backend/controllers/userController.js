const User = require('../models/User');

// Register a new user
exports.registerUser = async (req, res) => {

  try {
    const { name , email, password } = req.body;

    // Check if user with the same username already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new user
    const newUser = await User.create({ name , email, password });

    res.json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}



