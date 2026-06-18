// Problem Statement: Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses

// Complexity Analysis
// Time Complexity: O(n), where n is the length of the string.
// Space Complexity: O(1), as only constant extra space is used.

const s = "(1+(2*3)+((8)/4))+1";

function maximumDepthOfParenthesis(){
    let ans = 0;
    let p = 0;
    for(let i=0; i<s.length-1; i++){
        if(s[i] === '(') p++;
        if(s[i] === ')') p--;
        ans = Math.max(ans, p);
    }
    return ans;
}

console.log(maximumDepthOfParenthesis());