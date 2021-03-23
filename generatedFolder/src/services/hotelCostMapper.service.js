const makeHotelCostMapperCall = (getRadisonPrice, getIbiboPrice) => (getRadisonPrice < getIbiboPrice ? getRadisonPrice : getIbiboPrice);

module.exports = { makeHotelCostMapperCall };
