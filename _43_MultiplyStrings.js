var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';

    const m = num1.length;
    const n = num2.length;
    let res = new Array(n+m).fill(0);

    for(let i = m -1; i >=0 ;i--) {
        for(let j = n-1; j >=0; j--) {
            let p1=i+j, p2=i+j+1;
            let tmp = res[p2] + Number(num1[i]) * Number(num2[j]);
            res[p2] = tmp % 10;
            res[p1] = res[p1] + Math.floor(tmp / 10);

        }
    }
    if (res[0] == 0) res.shift()
    return res.join('');
}

console.log(multiply('3', '222'));