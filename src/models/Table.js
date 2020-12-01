const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  tableId: {
    type: Number,
    required: true,
  },
  capacity: {
    type: String,
    required: true,
  },
});

const Model = mongoose.model('Table', schema);

module.exports = Model;
