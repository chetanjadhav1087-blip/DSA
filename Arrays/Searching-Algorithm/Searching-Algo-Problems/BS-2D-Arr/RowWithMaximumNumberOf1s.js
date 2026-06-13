// Problem Statement: You have been given a non-empty grid ‘mat’ with 'n' 
// rows and 'm' columns consisting of only 0s and 1s. All the rows are 
// sorted in ascending order. Your task is to find the index of the row 
// with the maximum number of ones. Note: If two rows have the same number
// of ones, consider the one with a smaller index. If there's no row with 
// at least 1 zero, return -1

//BRUTEFORCE APPROACH
const mat = [[1,1,1],
             [1,0,1],
             [0,0,0],];

function searchingMaxNoOf1(){
    let maxcount = 0;
    let index = -1;
    let count = 0;
    for(let i = 0; i < mat.length; i++){
        // console.log(mat[i]);
        for(let j = 0; j < mat[i].length; j++){
            // console.log(mat[i][j])
            if(mat[i][j] === 1){
                count ++;
                // console.log(count);
            }
        }
        
        if(maxcount < count){
            maxcount = count;
            index = i;
        }
        count = 0;
    }
    return index;
}
// searchingMaxNoOf1();
console.log(searchingMaxNoOf1());

// OPTIMAL APPROACH
