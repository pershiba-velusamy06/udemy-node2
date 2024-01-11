const path = require('path');

const express = require('express');

const router = express.Router();

const products = [];
const controllerfun = require('../controllers/products')

// /admin/add-product => GET
router.get('/add-product',controllerfun.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', controllerfun.addProducts);

// exports.routes = router;
// exports.products = products;
module.exports = router;