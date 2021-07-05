/**
 * @param {string} s
 * @return {number}
 */


var calculate = function(s) {
    let temp = "";
    let stack = [];

    //key is to check what the PREVIOUS sign is, not current
    let prevSign = "+"
    for(let i = 0; i < s.length; i++){
        if(isNumber(s[i])){
            temp += s[i];
        }

        //last element will always end in number for a valid expression
        // " 3+5 / 2 "; => i === s.length-1)
        if(isOperator(s[i]) || i === s.length-1){
            if(prevSign === "+"){
                stack.push(temp);
            } else if(prevSign === "-"){
                temp = temp * -1;
                stack.push(temp);
            } else if(prevSign === "*"){
                let prevVal = stack.pop();
                temp *= prevVal;
                stack.push(temp);
            } else if(prevSign === "/"){
                let prevVal = stack.pop();
                prevVal /= temp;
                //removes fraction rather than floor() which rounds down and works wrong for - nums
                prevVal = Math.trunc(prevVal);
                stack.push(prevVal);
            }

            temp = "";
            prevSign = s[i];
        }
    }

    let res = 0;
    while(stack.length > 0){
        res += Number(stack.pop());
    }
    return res;
};

function isOperator(character){
    if(character === "+" || character === "-" ||
        character === "/" || character === "*"){
        return true;
    }
    return false;
}

function isNumber(character){
    if(character >= 0 && character <= 9){
        return true;
    }
    return false;
}

let r = " 3+5 / 2 ";
console.log(calculate(r))