const express = require("express");
const router = express.Router();
const OrderModel = require("../model/order.model");

router.get("/", async (req, res) => {
  const order = await OrderModel.find({}).populate("customer");
  res.send(order);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const order = await OrderModel.findById({ _id: id }).populate("customer");
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

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { amount, customer, notes, orderItems, status } = req.body;
  const order = await OrderModel.findOneAndUpdate(
    { _id: id },
    { $set: { amount, customer: customer._id, notes, orderItems, status } }
  );
  res.send({ status: "successfuly update", order });
});

module.exports = router;
