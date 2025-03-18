const ProductModel = require("../models/Product");
 

exports.getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
 