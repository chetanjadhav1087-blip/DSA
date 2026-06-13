// Given an array arr[], check if it is sorted in ascending order or not. 
// Equal values are allowed in an array and two consecutive equal values are considered sorted.

const array1 = [1, 2, 2, 3, 4, 5];
const array2 = [1, 3, 2, 4, 5];

// THIS CODE IS IMPLEMENTED USING ITERATION.

// Time Complexity: O(n)
// Space Complexity: O(1)

function isSortedIteration(arr){
    console.log('ITERATION CODE')
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i + 1]){
            console.log(`Comparing ${arr[i]} and ${arr[i + 1]}: not in order`);
            return false;
        }
        else{
            console.log(`Comparing ${arr[i]} and ${arr[i + 1]}: in order`);
        }
    }
    return true;
}

console.log(isSortedIteration(array1)); // true
console.log(isSortedIteration(array2)); // false

// THIS CODE IS IMPLEMENTED USING RECURSION.

// Time Complexity: O(n)
// Space Complexity: O(n) due to recursive stack space

function isSortedRecursion(arr, index = 0){
    console.log('RECURSION CODE')
    if(index >= arr.length - 1){
        return true;
    }
    console.log(`Comparing ${arr[index]} and ${arr[index + 1]}`);
    if(arr[index] > arr[index + 1]){
        console.log(`Not in order`);
        return false;
    }
    return isSortedRecursion(arr, index + 1);
}
console.log(isSortedRecursion(array1)); // true
console.log(isSortedRecursion(array2)); // false

