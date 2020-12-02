const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  tableId: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
});

const Model = mongoose.model('Table', schema);

module.exports = Model;
