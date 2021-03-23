const express = require('express');
const hotelHandler = require('../handlers/hotel.handler.js');

const hotelRouter = express.Router();
hotelRouter.get('/hotel', hotelHandler.hotelgetHandler);
module.exports = {
  hotelRouter,
};
