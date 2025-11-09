const express = require('express')
const router = express.Router()

const productControllers = require('../controllers/productControllers');

router.get('/', productControllers.getAllProduct);

router.get('/:id', productControllers.getProductById);

router.post('/', productControllers.addNewProduct);

module.exports = router;