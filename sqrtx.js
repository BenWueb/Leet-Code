/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let right = x;
  let left = 0;

  if (x < 2) {
    return x;
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === x) {
      return mid;
    }

    if (square < x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left - 1;
};
