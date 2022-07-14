"use strict"

module.exports = function check(str, bracketsConfig) {
  let pairs = bracketsConfig.map(pair => pair.join(""));
  while (str.length > 0) {
    pairs.forEach(pair => str = str.replaceAll(pair, ""));
    if (
      str.length > 0 &&
      !pairs.reduce((a, pair) => str.includes(pair) ? a += 1 : a, 0)
    ) {
      return false;
    }
  }
  return true;
}
