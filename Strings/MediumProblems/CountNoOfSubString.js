// Problem Statement: You are given a string s and a positive integer k.
// Return the number of substrings that contain exactly k distinct characters.

// Examples
// Example 1:
// Input:
//  s = "pqpqs", k = 2  
// Output:
//  7  
// Explanation:
//   All substrings with exactly 2 distinct characters:  
// "pq", "pqp", "pqpq", "qp", "qpq", "pqs", "qs"  
// Total = 7.

//USING SLIDING WINDOW

// Function to count substrings with at most k distinct characters
function atMostKDistinct(s, k) {
    let left = 0, res = 0;
    const freq = new Map();

    // Iterate with right pointer
    for (let right = 0; right < s.length; right++) {
        freq.set(s[right], (freq.get(s[right]) || 0) + 1);
        console.log(freq)
        // Shrink window if distinct characters exceed k
        while (freq.size > k) {
            freq.set(s[left], freq.get(s[left]) - 1);
            if (freq.get(s[left]) === 0) freq.delete(s[left]);
                    console.log(freq)

            left++;
        }

        // Count substrings in current window
        console.log(res)
        res += (right - left + 1);
    }
    return res;
}
function countSubstrings(s, k) {
  return atMostKDistinct(s, k) - atMostKDistinct(s, k - 1);
}
function main() {
    // Sample test
    const s = "pqpqs";
    const k = 2;

    // Output the result
    console.log("Count:", countSubstrings(s, k)); // Output: 7
}

main();