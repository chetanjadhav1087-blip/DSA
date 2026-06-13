const array = [1,23,4,5,3];

// METHOD 1: USING DUPLICATE ARRAY

function shiftArray(array){
    let duplicateArray = new Array(array.length-1);
    for(let i=0; i < array.length-1; i++){
        duplicateArray[i] = array[i+1];
    }
    duplicateArray.push(array[0]);

    console.log(duplicateArray);
}

// shiftArray(array);

// METHOD 2: USING TEMPORARY VARIABLE

function shiftArrayLeft(array){
    const temp = array[0];

    for(let i = 1; i < array.length; i++){
        array[i - 1] = array[i];
    }
    array[array.length-1] = temp;

    console.log(array);
}

shiftArrayLeft(array);