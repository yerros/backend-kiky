const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
  createAt: {
    type: Date,
    default: Date.now(),
  },
  customerName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("customer", CustomerSchema);
