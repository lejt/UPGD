const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);
// POST /api/orders/cart/items/:id
router.post('/cart/items', ordersCtrl.addToCart);
// router.post('/cart/items/:product', ordersCtrl.addToCart);

// POST /api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.setItemQtyInCart);
// POST /api/orders/cart/item/:id
router.delete('/cart/item/:id', ordersCtrl.deleteItemInCart);


// POST /api/orders/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout);
// GET /api/orders/history
router.get('/history', ordersCtrl.history);

module.exports = router;