const Cart = require('../models/Cart');

// Add a product to the cart
exports.addToCart = async (req, res) => {
  try {
    const { productId } = req.body;

    const cart = await Cart.findOneAndUpdate(
      { user: req.userId },
      { $addToSet: { products: productId } },
      { new: true, upsert: true }
    );

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

    let cart = await Cart.findOne({ userId: req.userId });
    // If the cart doesn't exist, create a new cart
    if (!cart) {
      cart = await Cart.create({ user: req.userId, items: [], total: 0 });
    }
    // Find the index of the product in the cart items array
    const productIndex = cart.items.findIndex((item) => item.product.toString() === productId);
    // If the product is not found in the cart, return an error
    if (productIndex === -1) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    // Update the quantity of the product
    cart.items[productIndex].quantity = quantity;
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
