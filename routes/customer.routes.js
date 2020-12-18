const express = require("express");
const router = express.Router();
const CustomerModel = require("../model/customer.model");

router.get("/", async (req, res) => {
  try {
    const customer = await CustomerModel.find();
    const totalUser = customer.length;
    res.json({
      totalUser,
      customer,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something error found on category",
    });
  }
});

router.post("/", async (req, res) => {
  const { customerName, address, phone } = req.body;
  const customer = new CustomerModel({
    customerName,
    address,
    phone,
  });
  await customer.save();
  res.json({
    status: 200,
    customer,
  });
});

module.exports = router;
