const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, default: 1 },
    },
  ],
  total: { type: Number, required: true },
  status: { type: String, default: "Pending" },
});

const OrderModel =mongoose.model("Order", OrderSchema);

module.exports =  OrderModel;