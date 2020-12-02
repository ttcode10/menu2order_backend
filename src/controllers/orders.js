const Order = require('../models/Order');

const getOrders = async (req, res) => {
  const orders = await Order.find().exec();

  if (!orders) {
    return res.json('Orders not found');
  }
  return res.json(orders);
}

const createOrder = async (req, res) => {
  const {orderId, tableId, guestNumber} = req.body;

  const existingOrder = await Order.findOne({orderId}).exec();
  if (existingOrder) {
    return res.json('Order exists, would you like to enter the order?');
  }

  const order = new Order({orderId, tableId, guestNumber});
  await order.save();
  return res.json(order);
}

const getOrderById = async (req, res) => {}

const updateOrder = async (req, res) => {}

module.exports = {
  getOrders,
  createOrder,
  getOrderById,
  updateOrder,
};

// orderId: {
//   type: Number,
//   required: true,
// },
// table: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: 'Table',
//   required: true,
// },
// guestNumber: {
//   type: Number,
//   required: true,
// },
// products: [{
//   product: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Product',
//     required: true,
//   },
//   quantity: {
//     type: String,
//     required: true,
//   },
//   subtotal: {
//     type: Number,
//     required: true,
//   },
//   timestamps: true,
// }],
// totalAmount: {
//   type: Number,
//   required: true,
// },
// timestamps: true,