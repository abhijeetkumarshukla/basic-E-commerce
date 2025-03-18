const express = require("express");
const { createPaymentIntent } = require("../controllers/orderController");

 

const orderRouter = express.Router();

orderRouter.post("/payment", createPaymentIntent);

module.exports = orderRouter;