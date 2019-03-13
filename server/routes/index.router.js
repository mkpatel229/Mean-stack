const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlProduct = require('../controllers/product.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/addProduct',jwtHelper.verifyJwtToken, ctrlProduct.addProduct);
router.get('/GetProduct/:_id', ctrlProduct.getProduct);
router.get('/GetAllProduct', ctrlProduct.getAllProduct);

module.exports = router;



