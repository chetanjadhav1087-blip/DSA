function findMinIndex(arr) {
    let low = 0, high = arr.length - 1;
    let minIndex = -1;

    while (low <= high) {

        // divide the range into three parts
        let mid1 = low + Math.floor((high - low) / 3);
        let mid2 = high - Math.floor((high - low) / 3);

        // if both arr[mid1] and arr[mid2] point to equal 
        // values narrow the search
        if (arr[mid1] === arr[mid2]) {

            // Move towards the center
            low = mid1 + 1;
            high = mid2 - 1;

            // tentatively store mid1 as
            // potential minimum
            minIndex = mid1;
        }

        // if arr[mid1] < arr[mid2], the minimum lies in the
        // left part (including mid1)
        else if (arr[mid1] < arr[mid2]) {
            high = mid2 - 1;

            // update with better candidate
            minIndex = mid1;
        }

        // is mid1 > mid2, the minimum lies in the
        // right part (including mid2)
        else {
            low = mid1 + 1;

            // update with better candidate
            minIndex = mid2;
        }
    }

    return minIndex;
}

// Driver Code
const arr = [9, 7, 1, 2, 3, 6, 10];
const idx = findMinIndex(arr);
console.log(idx);