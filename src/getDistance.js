/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  if (
    typeof firstPoint !== 'object' || typeof secondPoint !== 'object' ||
    firstPoint === null || secondPoint === null ||
    typeof firstPoint.X !== 'number' || typeof firstPoint.Y !== 'number' ||
    typeof secondPoint.X !== 'number' || typeof secondPoint.Y !== 'number'
  ) {
    throw new Error('Invalid input: Points must be objects with numeric X and Y properties');
  }

  const deltaX = secondPoint.X - firstPoint.X;
  const deltaY = secondPoint.Y - firstPoint.Y;

  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

  return parseFloat(distance.toFixed(2));
};
