/**
 * 187. Repeated DNA Sequences
 * All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T,
 * for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

 Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

 For example,

 Given s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",

 Return:
 ["AAAAACCCCC", "CCCCCAAAAA"].

 time : O(n)
 space : O(n)
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let seen = new Set();
    let repeat = new Set();
    for (let i = 0; i < s.length - 9; i++) {
        let temp = s.substring(i, i+10);
        if (seen.has(temp)) {
            repeat.add(temp);
        }
        seen.add(temp);
    }
    return [...repeat];
};

let str = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
console.log(findRepeatedDnaSequences(str));