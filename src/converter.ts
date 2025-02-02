/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {number}
 */
module.exports.converter = function (value, from, to) {
  value = parseFloat(value);
  if (isNaN(value)) throw new Error('Invalid value');

  if (from === to) return parseFloat(value.toFixed(2));

  let result;

  if ((from === 'm' && to === 'mi') || (from === 'mi' && to === 'm')) {
    result = from === 'm' ? value * 0.000621371 : value / 0.000621371;
  } else if ((from === 'gr' && to === 'pound') || (from === 'pound' && to === 'gr')) {
    result = from === 'gr' ? value * 0.00220462 : value / 0.00220462;
  } else if ((from === 'C' && to === 'K') || (from === 'K' && to === 'C')) {
    result = from === 'C' ? value + 273.15 : value - 273.15;
  } else {
    throw new Error('Invalid conversion units');
  }

  return parseFloat(result.toFixed(2));
};

