/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// method1　time: O(m*n), space: O(m*n)
var uniquePaths = function(m, n) {
    let res = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        res[i][0] = 1;
    }

    for (let i = 0; i < n; i++) {
        res[0][i] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            res[i][j] = res[i][j-1] + res[i-1][j];
        }
    }
    return res[m-1][n-1];
};

// method2　time: O(m*n), space: O(n)
var uniquePaths2 = function(m, n) {
    let res = new Array(n).fill(0);
    res[0] = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 1; j < n; j++) {
            res[j] = res[j] + res[j-1];
        }
    }
    return res[n-1];
};



console.log(uniquePaths(4,4))
