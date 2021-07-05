/**
 * 204. Count Primes
 * 素数，指在大於1的自然数中，除了1和該数自身外，無法被其他自然数整除的数
 * 厄拉多塞筛法，求一组质数，时间复杂度仅有O(nloglogn)
 * 如果从1到n-1分别判断质数，时间复杂度为O(nsqrt(n))）
 * 1   2  3  4  5  6  7  8  9 10
 * 11 12 13 14 15 16 17 18 18 20
 * sieve of Eratosthenes 筛选法， 2的倍数全部去除，3的倍数全部去除。
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let isNotPrime = new Array(n).fill(false);
    let res = 0;
    for (let i = 2; i < n; i++) {
        if (!isNotPrime[i]) {
            res++;
            for (let j = i; i * j < n; j++) {
                isNotPrime[i * j] = true;
            }
        }
    }
    return res;
};

console.log(countPrimes(10))