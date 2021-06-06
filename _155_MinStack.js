/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.minStack = [];
    this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (!this.stack.length) {
        this.minStack.push(val);
    } else {
        if (val < this.minStack[this.minStack.length-1]) {
            this.minStack.push(val);
        } else {
            this.minStack.push(this.minStack[this.minStack.length-1]);
        }
    }
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let top = this.stack[this.stack.length - 1];
    return top;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = this.minStack[this.minStack.length -1];
    return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()
console.log(obj);
console.log(param_4);