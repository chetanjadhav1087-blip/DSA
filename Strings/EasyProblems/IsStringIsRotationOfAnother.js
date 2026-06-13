// Problem Statement: Given two strings s and goal, return true if and 
// only if s can become goal after some number of shifts on s.
// A shift on s consists of moving the leftmost character of s to the 
// rightmost position. For example, if s = "abcde", then it will be 
// "bcdea" after one shift.

let s = 'rotation'
let goal = 'tionrota';

function rotationString(){
    for(i = 0; i < s.length; i++){
        let rotated = s.substring(i) + s.substring(0,i);
        console.log(goal,"=>",rotated);
        if(goal[i] === rotated[i]){
            return true;
        }
    }
    return false;
}
// console.log(rotationString());

// Time Complexity: O(N^2) since generating N rotations and each 
// comparison takes O(N) time.

// Space Complexity: O(N) for the space needed to store each rotated 
// string.

//OPTIMAL APPROACH
function optimalRotationString(){
    s += s;
    for(let i = 0; i < goal.length; i++){
        // console.log(goal.length +i);
        // console.log(s.substring(i, goal.length + i ));
        // if(s.substring(i, goal.length + i ) === goal){
        //     return true;
        // }

        // Other option code
        return s.includes(goal); 
    }
    return false;
}
console.log(optimalRotationString());

// Time Complexity: O(N), because checking for a substring in s + s is linear in time.

// Space Complexity: O(N) for the space needed to store the concatenated string s + s.