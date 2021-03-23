const utils = require('../utils/index.js');

const hotelgetHandler = (req, res) => {
  const getRadisonPrice = utils.makeApiCall('http://demo1852771.mockable.io/trivago', 'get');
  const getIbiboPrice = utils.makeApiCall('http://demo1852771.mockable.io/ibibo', 'get');
  const hotelCostMapper = utils.makeMapperCall([getRadisonPrice, getIbiboPrice], 'return getRadisonPrice < getIbiboPrice ? getRadisonPrice :  getIbiboPrice');
  res.status(200).send(hotelCostMapper);
};
module.exports = { hotelgetHandler };
