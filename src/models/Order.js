const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  orderId: {
    type: Number,
    required: true,
  },
  table: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Table',
    required: true,
  },
  guestNumber: {
    type: Number,
    required: true,
  },
  products: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    subtotal: {
      type: Number,
      required: true,
    },
    timestamps: true,
  }],
  totalAmount: {
    type: Number,
    required: true,
  },
  timestamps: true,
});

const Model = mongoose.model('Order', schema);

module.exports = Model;
