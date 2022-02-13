const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/orders/cart
router.get('/cart', ensureLoggedIn, ordersCtrl.cart);
// POST /api/orders/cart/items/:id
router.post('/cart/items', ensureLoggedIn, ordersCtrl.addToCart);
// POST /api/orders/cart/qty
router.put('/cart/qty', ensureLoggedIn, ordersCtrl.setItemQtyInCart);
// POST /api/orders/cart/item/:id
router.delete('/cart/item/:id', ensureLoggedIn, ordersCtrl.deleteItemInCart);
// POST /api/orders/cart/checkout
router.post('/cart/checkout', ensureLoggedIn, ordersCtrl.checkout);
// GET /api/orders/history
router.get('/history', ensureLoggedIn, ordersCtrl.history);

module.exports = router;