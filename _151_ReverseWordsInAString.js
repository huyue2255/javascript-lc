/**
 * Input: s = "the sky is blue"
 * Output: "blue is sky the"
 *
 *
 * Input: "a good   example"
 * Output: "example   good a"
 * Expected: "example good a"
 * @param {string} s
 * @return {string}
 */


var reverseWords = function(s) {
 let arr = s.trim().split(' ');

 let myArray = arr.filter(x => x)

 let res = myArray.reverse();
 return res.join(' ');
};

let input = "a good   example";
console.log(reverseWords(input))