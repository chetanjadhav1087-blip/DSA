// APPROACH 1: SORTING THE ARRAY

/* Time Complexity: O(N log N), for sorting the array.
Space Complexity: O(1), as we are using a constant amount of space for variables.
*/
const array = [12, 35, 1, 10, 34, 1];

function secondLargestBySorting(array) {
    if (array.length == 0|| array.length == 1  ) {
        console.log("Array should have at least two elements");
        return;
    }
    // Sorting an Array
    /* How sort() interprets the result:
    Negative value (a - b < 0) → a comes before b
    Zero (a - b === 0) → order stays the same
    Positive value (a - b > 0) → a comes after b */
    let sortedArray = array.sort((a, b) => b - a);
    if(sortedArray[0] == sortedArray[1]){
        console.log('Second Largest Element (by Sorting): Not Present');
        return;
    }
    let secondLargest = sortedArray[1];
    let secondSmallest = sortedArray[sortedArray.length - 2];

    console.log("Second Largest Element (by Sorting): " + secondLargest);
    console.log("Second Smallest Element (by Sorting): " + secondSmallest);
}
// secondLargestBySorting(array);

// APPROACH 2: SINGLE PASS THROUGH THE

// Time Complexity: O(N), where N is the number of elements in the array.
// Space Complexity: O(1), as we are using a constant amount of space for variables.
function secondLargestSinglePass(array) {
    if (array.length == 0|| array.length == 1  ) {
        console.log("Array should have at least two elements");
        return;
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            secondLargest = largest;
            largest = array[i];
        } 
        // Update second largest if current element is greater than it and not equal to largest
        else if (array[i] > secondLargest && array[i] != largest) {
            secondLargest = array[i];
        }

        if (array[i] < smallest) {
            secondSmallest = smallest;
            smallest = array[i];
        }
        // Update second smallest if current element is smaller than it and not equal to smallest
        else if (array[i] < secondSmallest && array[i] != smallest) {
            secondSmallest = array[i];
        }
    }
    if (secondLargest === -Infinity) {
        console.log("Second Largest Element (Single Pass): Not Present");
    } else {
        console.log("Second Largest Element (Single Pass): " + secondLargest);  
    }
    if (secondSmallest === Infinity) {
        console.log("Second Smallest Element (Single Pass): Not Present");
    } else {
        console.log("Second Smallest Element (Single Pass): " + secondSmallest);  
    }
}
// secondLargestSinglePass(array);

//APPROACH 3: Using INT_MAX and INT_MIN

// Time Complexity: O(N), we do two linear traversals in our array.
// Space Complexity: O(1), as we are using a constant

function secondLargestUsingIntMaxMin(array) {
    let smaller = Infinity;
    let secondSmaller = Infinity;

    let larger = -Infinity;
    let secondLarger = -Infinity;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < smaller) {
            secondSmaller = smaller;
            smaller = array[i];
        }
        else if (array[i] < secondSmaller && array[i] != smaller) {
            secondSmaller = array[i];
        }
        if (array[i] > larger) {
            secondLarger = larger;
            larger = array[i];
        }
        else if (array[i] > secondLarger && array[i] != larger) {
            secondLarger = array[i];
        }
    }
    if (secondLarger === -Infinity) {
        console.log("Second Largest Element (Using INT_MAX and INT_MIN): Not Present");
    } else {
        console.log("Second Largest Element (Using INT_MAX and INT_MIN): " + secondLarger);  
    }
    if (secondSmaller === Infinity) {
        console.log("Second Smallest Element (Using INT_MAX and INT_MIN): Not Present");
    } else {
        console.log("Second Smallest Element (Using INT_MAX and INT_MIN): " + secondSmaller);  
    }   

}

secondLargestUsingIntMaxMin(array);