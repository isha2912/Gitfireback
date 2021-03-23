const makeFlightsCostMapperCall = (getTrivagoPrice, getIbiboPrice) => (getTrivagoPrice < getIbiboPrice ? getTrivagoPrice : getIbiboPrice);

module.exports = { makeFlightsCostMapperCall };
