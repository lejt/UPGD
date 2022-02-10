const express = require('express');
const router = express.Router();
const paymentsCtrl = require('../../controllers/api/payments');

// POST /create-checkout-session
// router.post('/', paymentsCtrl.getPayment);
router.post('/', paymentsCtrl.getPayment);

module.exports = router;