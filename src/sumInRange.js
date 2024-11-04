/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  const numStart = Number(start);
  const numEnd = Number(end);

  const rangeStart = Math.min(numStart, numEnd);
  const rangeEnd = Math.max(numStart, numEnd);

  const sum = ((rangeEnd - rangeStart + 1) * (rangeStart + rangeEnd)) / 2;

  return sum;
};
