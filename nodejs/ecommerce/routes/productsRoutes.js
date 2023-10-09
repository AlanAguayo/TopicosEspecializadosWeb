const express = require("express");
const router = express.Router();

const product = require("../models/Product.js");
const category = require("../models/Category.js");

router.get('/products', async (req, res) => {
    const products = await product.find().populate("category");
    res.send(products);
});

module.exports = router;