const express = require('express');
const validatorMiddleware = require('../validators/item-validator');

const router = express.Router();

router.post('/add', validatorMiddleware, (req, res) => res.json({work : true}));//next value is a controller to save the item

module.exports = router;