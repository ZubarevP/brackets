"use strict"
module.exports = function check(str, bracketsConfig) {
  let open_brkt = new Map(bracketsConfig);
  let close_brkt = new Map(bracketsConfig.map(a => a.reverse()));
  let stack = [];

  for (let char of str) {
    //    console.log(`all: ${str}`);
    //    console.log(`head: ${stack.join('')}`);
    //    console.log(char);
    // stack is empty
    if (stack.length === 0) {
      if (open_brkt.has(char)) {
        stack.push(char);
      } else {
        return false;
      }

      // stack has value
    } else {
      // twean brackets
      if (open_brkt.has(char) && close_brkt.has(char)) {
        stack.at(-1) == char ? stack.pop() : stack.push(char);
        // single bracket
      } else if (open_brkt.has(char)) {
        stack.push(char);
      } else if (stack.at(-1) == close_brkt.get(char)) {
        stack.pop();
      } else {
        return false;
      }
    }

  }
  return stack.length == 0 ? true : false;
}
