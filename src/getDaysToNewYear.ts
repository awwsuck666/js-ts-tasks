/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate) {
  const date = new Date(targetDate);
  if (isNaN(date)) throw new Error('Invalid date');

  const nextNewYear = new Date(date.getFullYear() + 1, 0, 1);
  const timeDiff = nextNewYear - date;
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return daysLeft;
};
