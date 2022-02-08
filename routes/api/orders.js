const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);
// POST /api/orders/cart/items/:id
router.post('/cart/items', ordersCtrl.addToCart);
// router.post('/cart/items/:product', ordersCtrl.addToCart);


module.exports = router;