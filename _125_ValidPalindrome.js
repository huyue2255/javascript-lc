/**
 * 125. Valid Palindrome
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 For example,
 "A man, a plan, a canal: Panama" is a palindrome.
 "race a car" is not a palindrome.

 Note:
 Have you consider that the string might be empty? This is a good question to ask during an interview.

 For the purpose of this problem, we define empty string as valid palindrome.

 case : "A man, a plan, a canal: Panama"

 time : O(n)
 space : O(1);
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  for (let i = 0; i < s.length; i++) {
      if (s[i] !== s[s.length - 1 - i]) {
          return false;
      }
  }
  return true;
};

let s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s));