/*
PROBLEM STATEMENT: You are given a sorted array arr of 
distinct values and a target value x. You need to search for the
index of the target value in the array.
*/

class SearchInsertPosition {
    searchPosition(arr, x) {
        let low = 0;
        let high = arr.length - 1;
        let ans = arr.length;

        while (low <= high) {
            let mid = Math.floor((high+low) / 2);

            if(arr[mid] > x){
                ans = mid;
                high = mid - 1;
            } else if(arr[mid] === x) {
                return mid;
            }
            else {
                low = mid + 1;
            }
        }

        return ans;
    }
}

const arr = [1,3,4,7];
const x = 5;

const obj = new SearchInsertPosition();
const index = obj.searchPosition(arr, x);

console.log('Position is: ', index);