const express = require('express');
const router = express.Router();
const controller = require('./controller');
const validator = require("./validation");

router
  .route('/')
  .post(validator.bidCap,controller.getBidCapValue)


module.exports = router;