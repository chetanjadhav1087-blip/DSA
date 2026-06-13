// Problem Statement: Given an input string, containing upper-case and lower-case letters, digits, and spaces( ' ' ). A word is defined as a sequence of non-space characters. The words in s are separated by at least one space. Return a string with the words in reverse order, concatenated by a single space.

// Example
// Input: s = "welcome to the jungle"
// Output: "jungle the to welcome"
// Explanation: The words in the input string are "welcome", "to", "the", and "jungle". Reversing the order of these words gives "jungle", "the", "to", and "welcome". The output string should have exactly one space between each word.

const string = "welcome to the       jungle";

let s = string.split(/\s+/);
let rev = [];
for(let i = s.length-1; i >= 0; i--){
    rev.push(s[i]);
}
console.log(s)

