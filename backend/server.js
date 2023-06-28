// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/database');
const env = require('./config/env');
require('dotenv').config();

dotenv.config();

const app = express();

connectDB();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Routes
const userRoutes = require('./routes/users');
const cartRoutes= require('./routes/cart');
const productRoutes= require('./routes/products');
app.use('/api/users', userRoutes.routes);
app.use('/api/carts', cartRoutes );
app.use('/api/products', productRoutes );


  
// Error handling middleware
app.use(require('./middlewares/errorMiddleware').errorHandler);

// Start the server
const PORT = env.PORT;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
