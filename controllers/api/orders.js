const Order = require('../../models/order');

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  deleteItemInCart,
  checkout,
  history,
};

// A cart is the unpaid order for a user
async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);

  res.json(cart);
}

// Add an item to the cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addItemToCart(req.body.product.title, req.body.product.price, req.body.product.shipping, req.body.product.image, req.body.product.link);

  res.json(cart);
}

// Updates an item's qty in the cart
async function setItemQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);

  await cart.setItemQty(req.body.itemId, req.body.newQty);
  res.json(cart);
}

async function deleteItemInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.deleteItem(req.body.itemId);

  res.json(cart);
}

// Update the cart's isPaid property to true
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();

  res.json(cart);
}

// Return the logged in user's paid order history
async function history(req, res) {
  // Sort most recent orders first
  const orders = await Order
    .find({ user: req.user._id, isPaid: true })
    .sort('-updatedAt').exec();
  res.json(orders);
}