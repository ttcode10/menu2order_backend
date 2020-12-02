const express = require('express');

// const auth = require('../middlewares/auth');

const {
  getOrders,
  createOrder,
  getOrderById,
  updateOrder,
} = require('../controllers/orders');

const router = express.Router();

router.get('/', getOrders);
router.post('/', createOrder);
router.get('/:id', getOrderById);
router.put('/:id', updateOrder);

module.exports = router;
