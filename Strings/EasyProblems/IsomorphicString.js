// Problem Statement: Given two strings s and t, determine if they are 
// isomorphic. Two strings s and t are isomorphic if the characters in s 
// can be replaced to get t.
// All occurrences of a character must be replaced with another character 
// while preserving the order of characters. No two characters may map to 
// the same character, but a character may map to itself.

// Example 1
// Input:
//  s = "paper", t = "title"
// Output:
//  true
// Explanation:
//  The characters in "s" can be mapped one-to-one to characters in "t": 
// 'p' → 't', 'a' → 'i', 'e' → 'l', 'r' → 'e'
// Since the mapping is consistent and unique for each character, the strings are isomorphic.

const s = 'paper';
const t = 'title';

function isomorphicString(){
    let m1 = Array(256).fill(0);
    let m2 = Array(256).fill(0);

    let n = s.length;

    for(let i = 0; i < n; i++){
        if(m1[s.charCodeAt(i)] !== m2[t.charCodeAt(i)]){
            return false;
        }

        m1[s.charCodeAt(i)] = i + 1;
        m2[t.charCodeAt(i)] = i + 1;

        console.log(m1[s.charCodeAt(i)], "=>", m2[t.charCodeAt(i)]);
    }

    return true;
}

console.log(isomorphicString());

// Time Complexity: O(N) where N is the length of the input strings, due 
// to the single loop iterating through each character.

// Space Complexity: O(1) since the space used by the arrays is constant 
// (256 fixed size) regardless of input size