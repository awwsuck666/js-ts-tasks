/**
 * Given cone height and radius (numbers). Evaluate volume of a cone
 * @param {number} h - height
 * @param {number} r - radius
 * @returns {number}
 */
module.exports.volumeCone = function volumeCone(h, r) {
  if (h < 0 || r < 0) {
    throw new Error("Height and radius must be non-negative");
  }

  const volume = (1 / 3) * Math.PI * Math.pow(r, 2) * h;

  return volume;
};
