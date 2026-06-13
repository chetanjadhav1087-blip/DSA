
// Problem Statement: A valid parentheses string is defined by the following rules:

// It is the empty string "".
// If A is a valid parentheses string, then so is "(" + A + ")".
// If A and B are valid parentheses strings, then A + B is also valid.

// Input:
//  s = "((()))"
// Output:
//  "(())"
// Explanation:
//  The input string is a single primitive: "((()))".  
// Removing the outermost layer yields: "(())".

let str = '()(()())(())';

function removeOuterParenthesis(){
    let counter = 0;
    let result = '';

    for(let i = 0; i < str.length; i++){
        if(str[i] === '('){
            if(counter > 0){
                result += str[i];
                console.log(result)
            }
            counter++;
        }
        if(str[i] === ')'){
            counter--;
            if(counter > 0){
                result += str[i];
                console.log(result)
            }
        }
    }
    return result;
}
console.log(removeOuterParenthesis());