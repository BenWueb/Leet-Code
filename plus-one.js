/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const num = BigInt(digits.join("")) + 1n;
  const numAsString = num.toString();

  let arr = [];

  for (let i = 0; i < numAsString.length; i++) {
    const num = parseInt(numAsString[i]);
    arr.push(num);
  }

  return arr;
};
