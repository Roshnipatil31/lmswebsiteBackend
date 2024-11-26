// const express = require("express");
// const router = express.Router();
// const paymentController = require("../controllers/paymentController");
// const authMiddleware = require("../middlewares/authMiddleware");
// const authorizeRole = require("../middlewares/authorizeRole");

// router.post("/", authMiddleware, paymentController.createPayment);

// router.delete(
//   "/delete/:id",
//   authMiddleware,
//   authorizeRole("admin"),
//   paymentController.deletePayment
// );

// router.get(
//   "/",
//     authMiddleware,
//     authorizeRole("admin"),
//   paymentController.getAllPayments
// );

// router.get(
//   "/details/:payment_id",
//   //   authMiddleware,
//   //   authorizeRole("student"),
//   paymentController.getPaymentDetails
// );
// module.exports = router;



// routes/paymentRoutes.js

const express = require('express');
const router = express.Router();
const {
  createOrder,
  verifyPayment,
  handleWebhook,
  getAllPayments,
  createCustomPackageOrder,
  customPackageWebhookHandle,

} = require('../controllers/paymentController');
const authMiddleware = require('../middlewares/authMiddleware'); // Ensure you have an auth middleware

// Apply authentication middleware to protect these routes except for webhook
router.post('/create-order', authMiddleware, createOrder);
router.post('/verify-payment-webhook', verifyPayment);

// Webhook route should not be protected by auth middleware
router.post('/webhook', handleWebhook);
router.get('/allPayments',getAllPayments);

// Route to create Razorpay order and send payment link via email
router.post('/customPackage/create-order', createCustomPackageOrder);

// Webhook route to verify payment status
router.post('/customPackage/webhook', express.raw({ type: 'application/json' }), customPackageWebhookHandle);


module.exports = router;
