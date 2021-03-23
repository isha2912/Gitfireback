const utils = require('../utils/index.js');

const flightgetHandler = (req, res) => {
  const getTrivagoPrice = utils.makeApiCall('http://demo1852771.mockable.io/trivago', 'get');
  const getIbiboPrice = utils.makeApiCall('http://demo1852771.mockable.io/ibibo', 'get');
  const flightsCostMapper = utils.makeMapperCall([getTrivagoPrice, getIbiboPrice], 'return getTrivagoPrice < getIbiboPrice ? getTrivagoPrice :  getIbiboPrice');
  res.status(200).send(flightsCostMapper);
};
const flightpostHandler = (req, res) => {
  const getTrivagoPrice = utils.makeApiCall('http://demo1852771.mockable.io/trivago', 'post');
  res.status(200).send(getTrivagoPrice);
};
module.exports = { flightgetHandler, flightpostHandler };
