const express = require('express');
const flightHandler = require('../handlers/flight.handler.js');

const flightRouter = express.Router();
flightRouter.get('/flight', flightHandler.flightgetHandler);
flightRouter.post('/flight', flightHandler.flightpostHandler);
module.exports = {
  flightRouter,
};
