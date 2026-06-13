const array = [11,50,23,4,65,32,78,90,100,45,67,89,34,22,10];

const target = 90;

// In Linear Search, we traverse the array sequentially to find the target element.

// Time Complexity: O(n)
// Space Complexity: O(1)

const result = (array, target) => {
    for(let i in array){
        if( array[i] === target ) {
            console.log(`Element found at index ${i}`);
            return;
        } 
    }
    return console.log('Element not found');
}

result(array, target);