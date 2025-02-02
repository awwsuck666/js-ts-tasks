/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (word) {
  if (typeof word !== 'string' && typeof word !== 'number') {
    throw new Error('Invalid input');
  }

  const str = word.toString().toLowerCase();

  if (typeof word === 'string') {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < alphabet.length; i++) {
      if (!str.includes(alphabet[i])) {
        return false;
      }
    }
    return true;
  } else {
    const digits = '0123456789';
    for (let i = 0; i < digits.length; i++) {
      if (!str.includes(digits[i])) {
        return false;
      }
    }
    return true;
  }
};

