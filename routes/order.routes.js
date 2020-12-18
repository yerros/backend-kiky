const express = require("express");
const router = express.Router();
const OrderModel = require("../model/order.model");

router.get("/", async (req, res) => {
  const order = await OrderModel.find({}).populate("customer");
  res.send(order);
});

router.post("/", async (req, res) => {
  const { amount, customer, notes, orderItems } = req.body;
  const order = new OrderModel({
    amount,
    customer: customer._id,
    notes,
    orderItems,
  });
  await order.save();
  res.send({ status: "success", order });
});

module.exports = router;
