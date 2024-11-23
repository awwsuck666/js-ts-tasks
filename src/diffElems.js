/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }
  return new Set(arr).size;
};