const mongoose = require('mongoose');

// Establish database connection

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 30000, 
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Failed to connect to the database');
    process.exit(1)
  }
};

module.exports = connectDB;
