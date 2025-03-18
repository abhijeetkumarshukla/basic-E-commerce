const express = require("express");
const { getProducts } = require("../controllers/productController");
const productCreate = require("../controllers/productCreate.controllers");
 

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.post('/createProduct', productCreate )

module.exports = productRouter;