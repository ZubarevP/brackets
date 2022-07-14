"use strict"

module.exports =
  function check(str, bracketsConfig) {
    let pairs = bracketsConfig.map(pair => pair.join(""));
    while (str.length > 0) {
      pairs.forEach(pair => str = str.replaceAll(pair, ""));
      if (str.length > 0 && !pairs.reduce((a, pair) => str.includes(pair) ? a += 1 : a, 0)) {
        return false;
      }
    }
    return true;
  }



/* 
const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

console.log(check('()', config1) === true ? "" : "No 1");// true
console.log(check('((()))()', config1) === true ? "" : "No 2");// true
console.log(check('())(', config1) === false ? "" : "No 3") // false
console.log(check('([{}])', config3) === true ? "" : "No 4") // true
console.log(check('[(])', config2)) // false

console.log(check('[]()', config2)) // true

console.log(check('[]()(', config2)) // false

console.log(check('||', config4)) // true

console.log(check('|()|', config5)) // true

console.log(check('|(|)', config5)) // false

console.log(check('|()|(||)||', config5)) // true
 
   console.log(check('11111561111111122228888882222557787777877555566667777777777662222    2', config6), true);
 
   console.log(check('55555125755577777775555666678888886676611338334484411112222333334    44442266666', config6), false);
 
   console.log(check('88888778788877777778888888877777778878877887888878877777777888888    88887788888', config6), false);
 
   console.log(check('11111561111111115611111111222288888822225577877778775555666677777    7777766222221111222288888822225577877778775555666677777777776622222', config6), true);
 
   console.log(check('[]][[]', config3), false);
 
   console.log(check('[]][[]', config2), false);
 
   console.log(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}    }}}}]]))))]]]]))()', config7), false);
 
   console.log(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}    }}}}]]))))]]]])(())', config7), true);
 
   console.log(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}    }}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]    ]))))]]]])))', config7), true);
*/
