const Cart = require('../models/Cart');

// Add a product to the cart
exports.addToCart = async (req, res) => {
  try {
    const { productId } = req.body;

    const cart = await Cart.findOne({ userId: req.userId });

    cart.products.push(productId);
    await cart.save();

    res.json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update the quantity of a product in the cart
exports.updateCartItem = async (req, res) => {
  try {
    const { productId } = req.params;
    const { quantity } = req.body;

    // Assuming you have a Cart model or equivalent
    const cart = await Cart.findOne({ userId: req.userId });

    // Find the product in the cart
    const cartItem = cart.products.find((item) => item.productId === productId);

    // If the product is not found in the cart, return an error
    if (!cartItem) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    // Update the quantity of the product
    cartItem.quantity = quantity;
    await cart.save();

    res.json({ message: 'Cart item updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Remove a product from the cart
exports.removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;

    // Assuming you have a Cart model or equivalent
    const cart = await Cart.findOne({ userId: req.userId });

    // Remove the product from the cart
    cart.products.pull(productId);
    await cart.save();

    res.json({ message: 'Product removed from cart successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get the cart information for a user
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.userId }).populate('products');

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
