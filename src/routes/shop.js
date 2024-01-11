const path = require('path');

const express = require('express');

const controllerFun = require('../controllers/products');
const router = express.Router();

router.get('/', controllerFun.getAllProducts);

module.exports = router;
