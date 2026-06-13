const s = '000021463844';

// Problem Statement: Given a string s, representing a large integer, the 
// task is to return the largest-valued odd integer (as a string) that is 
// a substring of the given string s. The number returned should not have 
// leading zero's. But the given input string may have leading zero.

// Time Complexity: O(N), since the loop runs once through the string of length N.

// Space Complexity: O(1), as we are using only a constant amount of extra space.
function largestOddNumber() {

    let end = -1;
    for (let i = s.length - 1; i > 0; i--) {
        if (s[i] % 2 !== 0) {
            end = i + 1;
            break;
        }
    }
    let i = 0
    while (i <= end && s[i] === '0') {
        i++;
    }
    console.log(s.substring(i, end));
}

largestOddNumber();
