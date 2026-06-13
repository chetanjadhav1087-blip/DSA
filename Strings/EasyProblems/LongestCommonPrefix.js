// Problem Statement: Write a function to find the longest common prefix 
// string amongst an array of strings. If there is no common prefix, 
// return an empty string "".

const str = ['flower', 'flow', 'floght']

function longestCommonPrefix(){

    if(str.length === 0) return '';

    // Sorting the array helps bring these boundary strings to the extremes.
    str.sort();

    // By comparing only the first and last strings, we can determine the 
    // full common prefix shared by the entire array.
    let first = str[0];
    let last = str[str.length - 1];

    let commonPrefix = '';

    for(let i = 0; i < Math.min(first.length, last.length); i++){
        if(first[i] !== last[i]){
            return commonPrefix;
        }
        commonPrefix += first[i];
    }
    return commonPrefix;
}

console.log(longestCommonPrefix())


// Time Complexity: O(N * log N + M), where N is the number of strings and 
// M is the minimum length of a string. The sorting operation takes 
// O(N * log N) time, and the comparison of characters in the first and 
// last strings takes O(M) time.

// Space Complexity: O(M), as the ans variable can store the length of 
// the prefix which in the worst case will be O(M).

