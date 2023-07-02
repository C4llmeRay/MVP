const Cart = require('../models/Cart');

// Add a product to the cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    let cart = await Cart.findOne({ user: req.userId });
    // If the cart doesn't exist, create a new cart
    if (!cart) {
      cart = await Cart.create({ user: req.userId, items: [], total: 0 });
    }

    // Check if the product is already in the cart
    const existingItem = cart.items.find((item) => item.product.toString() === productId);
    if (existingItem) {
      // If the product already exists, update the quantity
      existingItem.quantity += quantity;
    } else {
      // If the product doesn't exist, add it to the cart
      cart.items.push({ product: productId, quantity });
    }

    // Calculate the total based on the items in the cart
    cart.total = cart.items.reduce((total, item) => total + item.quantity, 0);

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

    const cart = await Cart.findOne({ user: req.userId });

    // Find the item in the cart with the matching product ID
    const item = cart.items.find((item) => item.product.toString() === productId);
    if (!item) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    // Update the quantity of the item
    item.quantity = quantity;

    // Calculate the total based on the updated items in the cart
    cart.total = cart.items.reduce((total, item) => total + item.quantity, 0);

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

    const cart = await Cart.findOne({ user: req.userId });

    // Find the index of the item in the cart with the matching product ID
    const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);
    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }

    // Remove the item from the cart
    cart.items.splice(itemIndex, 1);

    // Calculate the total based on the updated items in the cart
    cart.total = cart.items.reduce((total, item) => total + item.quantity, 0);

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
    const cart = await Cart.findOne({ user: req.userId }).populate('items.product');

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};