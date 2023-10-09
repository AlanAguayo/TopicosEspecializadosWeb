const express = require("express");
const router = express.Router();

const productController = require("../controllers/ProductController.js");

router.get('/products', productController.findAll);

router.get('/products/:id', productController.findOne);

router.post('/products', productController.save);

router.put('/products', productController.update);

router.delete('/products/:id', productController.drop);

module.exports = router;