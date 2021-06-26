
/**
* 186. Reverse Words in a String II
* For example,
 * Given s = "the sky is blue",
 * return "blue is sky the"
 * time : O(n) space : O(1)
**/

function helper(s, start, end) {
    while (start < end) {
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
    return s;
}


var reverseWords = function(s) {
    s.reverse();
    let index = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            helper(s, index, i-1);
            index = i+1;
        }
    }
    helper(s,index, s.length-1)
};
let s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]

// let res = s.join('').split(' ').reverse().join().split('');

// console.log(helper(s, 5,6));
reverseWords(s)
console.log(s); // ['b', 'l', 'u', 'e',' ', 'i', 's', ' ','s', 'k', 'y', ' ','t', 'h', 'e']

