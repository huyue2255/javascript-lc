// var canConstruct = function(ransomNote, magazine) {
//     let map1 = new Map();
//     let map2 = new Map();
//     // fill out character count object
//     for (let i = 0; i < ransomNote.length; i++) {
//         let char = ransomNote[i];
//         let val = map1.get(char) + 1 || 1;
//         map1.set(char, val);
//     }
//
//
//     for (let i = 0; i < magazine.length; i++) {
//         let char = magazine[i];
//         let val = map2.get(char) + 1 || 1;
//         map2.set(char, val);
//     }
//
//     for (let [key, value] of map1.entries()) {
//         if (!map2.has(key)) {
//             return false;
//         } else {
//             if (map2.get(key) < value) {
//                 return false;
//             }
//         }
//     }
//     return true;
// };


// Splite the magazine string into an array
// Loop through each character in the ransomNote string
// If the current ransomNote character can't be found in the array, break the loop and return false
// If the current ransomNote character is found in the array, splice that character out of the array for future checks
// If the loop completes, return true
// Faster than 79% of JavaScript submissions

var canConstruct = function(ransomNote, magazine) {
    const arr = magazine.split('');
    for (let i = 0; i < ransomNote.length; i++) {
        if (arr.indexOf(ransomNote[i]) === -1) {
            return false;
        } else {
            arr.splice(arr.indexOf(ransomNote[i]), 1);
        }
    }
    return true;
};

console.log(canConstruct("aaa", "aab"));

let myMap = new Map()
myMap.set(0, 'zero')
myMap.set(1, 'one')







