var solution = function(isBadVersion) {
    return function(n) {
        let start = 1;
        let end = n;

        while(start + 1 < end) {
            const mid = start + Math.floor((end - start) / 2);
            if (isBadVersion(mid)) {
                end = mid;
            } else {
                start = mid;
            }
        }
        if (isBadVersion(start)) return start;
        return end;
    };
};