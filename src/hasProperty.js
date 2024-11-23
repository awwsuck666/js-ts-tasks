/**
 * Check if an {object} contains property {prop}
 * @param {Object} object
 * @param {Object} prop
 * @returns {boolean}
 */
module.exports.hasProperty = function hasProperty(object, prop) {
  if (typeof object !== 'object' || object === null) {
    throw new Error('First argument must be a non-null object');
  }
  if (typeof prop !== 'string') {
    throw new Error('Second argument must be a string');
  }
  return Object.prototype.hasOwnProperty.call(object, prop);
};