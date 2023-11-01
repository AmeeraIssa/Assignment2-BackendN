const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.addProduct);
router.put('/:id', productController.updateProductById);
router.delete('/:id', productController.removeProductById);
router.delete('/', productController.removeAllProducts);
router.get('/search', productController.findProductsByName);

module.exports = router;
