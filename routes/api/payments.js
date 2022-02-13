const express = require('express');
const router = express.Router();
const paymentsCtrl = require('../../controllers/api/payments');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /create-checkout-session to Stripe API
router.post('/', ensureLoggedIn, paymentsCtrl.getPayment);

module.exports = router;