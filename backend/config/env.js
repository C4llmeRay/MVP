require('dotenv').config();

const env = {
  PORT: process.env.PORT || 4000,
  JWT_SECRET: process.env.JWT_SECRET || 'yoursecretkey',
  MONGODB_URI: process.env.MONGODB_URI ,
};

module.exports = env;
