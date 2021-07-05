/**
 * 251. Flatten 2D Vector
 * Given 2d vector =

 [
 [1,2],
 [3],
 [4,5,6]
 ]
 By calling next repeatedly until hasNext returns false,
 the order of elements returned by next should be: [1,2,3,4,5,6].

 time : O(n)
 space : O(1)
 * @param {number[][]} vec
 */
var Vector2D = function(vec) {
    // 两种方法flattern 2d matrix array
    // this.arr = vec.flat(2); // method 1
    // method 2
    this.arr = [];
    const helper = (val) => {
        if (!Array.isArray(val)) {
            this.arr.push(val)
        }

        for (let i = 0; i < val.length; i++) {
            helper(val[i])
        }
        return
    }
    helper(vec);
};




/**
 * @return {number}
 */
Vector2D.prototype.next = function() {
    return this.arr.shift();
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function() {
    return this.arr.length > 0;
};

/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(vec)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */