var solution = function(isBadVersion) {
    return function(n) {
        let min = null;
        let start = 0;
        let end = n;

        while(start <= end) {
            const mid = Math.floor((start + end) / 2);

            if (isBadVersion(mid)) {
                min = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return min;
    };
};