/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let currentString = [];
  let length = 0;

  for (let i = 0; i < s.length; i++) {
    let charPos = currentString.indexOf(s[i]);

    if (charPos !== -1) {
      currentString.splice(0, charPos + 1);
    }

    currentString.push(s[i]);

    length = Math.max(length, currentString.length);
  }

  return length;
};
