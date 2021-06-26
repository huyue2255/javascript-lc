/**
 * 170. Two Sum III - Data structure design
 * Design and implement a _1_TwoSum class. It should support the following operations: add and find.

 add - Add the number to an internal data structure.
 find - Find if there exists any pair of numbers which sum is equal to the value.

 For example,
 add(1); add(3); add(5);
 find(4) -> true
 find(7) -> false
 * Initialize your data structure here.
 */
var TwoSum = function() {
    this.nums = new Map();
};

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    if (!this.nums.has(number)) {
        this.nums.set(number,1);
    } else {
        this.nums.set(number, this.nums.get(number) + 1);
    }
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    for (const[num, count] of this.nums) {
        let diff = value - num;
        if ((diff == num && count > 1) || (diff != num && this.nums.has(diff))) {
            return true;
        }
    }
    return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */