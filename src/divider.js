/**
 * Given number n and number k. Find the whole part and the remainder of the integer division of n by k.
 * Return a string formatted "wholePart remainder"
 * @param {number} n - number
 * @param {number} k - number
 * @returns {number}
 */
module.exports.divider = function divider(n, k) {
    if (k === 0) {
      throw new Error("Division by zero is not allowed");
    }

    const wholePart = Math.floor(n / k);
    const remainder = n % k;

    return `${wholePart} ${remainder}`;
};