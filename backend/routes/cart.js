const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const CartController = require('../controllers/cartController');
// GET /api/cart
// Get the user's cart
router.get('/', authMiddleware, CartController.getCart);


// Add a product to the user's cart
router.post('/', authMiddleware, CartController.addToCart);

// Update the quantity of a product in the cart
router.put('/:productId', authMiddleware, CartController.updateCartItem);

// DELETE /api/cart/:productId
// Remove a product from the user's cart
router.delete('/:productId', authMiddleware, CartController.removeFromCart);

module.exports = router;
