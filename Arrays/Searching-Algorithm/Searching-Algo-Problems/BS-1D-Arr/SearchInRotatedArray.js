class Solution {

    search(arr, targate) {
        let low = 0;
        let high = arr.length - 1;

        while (low <= high) {

            let mid = Math.floor((low + high) / 2);

            if (arr[mid] === targate) return mid;
            if (arr[low] <= arr[mid]) {
                if (arr[low] <= targate && targate < arr[mid]) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            } else {
                if (arr[mid] < targate && targate <= arr[high]) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }
        return -1;
    }
}

const nums = [4,5,6,7,0,1,2];
const target = 0;

const obj = new Solution();
const result = obj.search(nums, target);

console.log(result);