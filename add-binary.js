/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const aInt = BigInt(`0b${a}`);
  const bInt = BigInt(`0b${b}`);

  const sum = aInt + bInt;
  return sum.toString(2);
};
