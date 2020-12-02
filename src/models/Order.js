const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  // table: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Table',
  //   required: true,
  // },
  tableId: {
    type: String,
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
    },
    quantity: {
      type: Number,
      required: false,
    },
    subtotal: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: false,
  }],
  totalAmount: {
    type: Number,
    required: false,
  },
},
{
  timestamps: true,
});

const Model = mongoose.model('Order', schema);

module.exports = Model;
