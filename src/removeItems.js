/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  if (!Array.isArray(arr)) {
    throw new Error('First argument must be an array');
  }

  return arr.filter(item => item !== value);
};