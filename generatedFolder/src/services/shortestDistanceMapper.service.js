const makeShortestDistanceMapperCall = (getSource, getDestination) => (getSource < getDestination ? getSource : getDestination);

module.exports = { makeShortestDistanceMapperCall };
