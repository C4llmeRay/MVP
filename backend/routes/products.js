const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const authMiddleware = require('../middlewares/authMiddleware');
const productController = require('../controllers/productController');


// GET /products
// Get all products
router.get('/', productController.getAllProducts);

// POST /products
// Create a new product
router.post('/', productController.createProduct);

// GET /products/:id
// Get a single product by ID
router.get('/:id', productController.getProductById);

// GET /products/:category
// Get products by category
router.get('/category/:category', productController.getProductsByCategory);

// PUT /products/:id
// Update a product by ID
router.put('/:id', productController.updateProduct);

// DELETE /products/:id
// Delete a product by ID
router.delete('/:id', productController.deleteProduct);

module.exports = router;
