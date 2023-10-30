const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getAllProducts);

// Add other routes for CRUD operations

module.exports = router;
