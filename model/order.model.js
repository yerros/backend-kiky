const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const OrderSchema = mongoose.Schema({
  orderDate: {
    type: Date,
    default: Date.now(),
  },
  orderID: {
    type: Number,
  },
  status: {
    type: Number,
    default: 0,
  },
  orderItems: {
    type: Array,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
  },
  customer: {
    type: mongoose.Types.ObjectId,
    ref: "customer",
  },
});

OrderSchema.plugin(AutoIncrement, { inc_field: "orderID", start_seq: 1000 });
module.exports = mongoose.model("order", OrderSchema);
