/**
 * Compares two numbers
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {string} - Returns a string describing the relationship between the numbers
 */
module.exports.compareTwoNumbers = function compareTwoNumbers(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return "firstNumber is greater than secondNumber";
  } else if (firstNumber < secondNumber) {
    return "firstNumber is less than secondNumber";
  } else {
    return "firstNumber is equal to secondNumber";
  }
};
