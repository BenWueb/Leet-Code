/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const sArray = s.trim().replace(/\s+/gm, ",").split(",");
  return sArray[sArray.length - 1].length;
};
