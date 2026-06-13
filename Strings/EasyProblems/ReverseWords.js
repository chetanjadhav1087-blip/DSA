// Problem Statement: Given an input string, containing upper-case and 
// lower-case letters, digits, and spaces( ' ' ). A word is defined as a 
// sequence of non-space characters. The words in s are separated by at 
// least one space. Return a string with the words in reverse order, 
// concatenated by a single space.
const str = 'welcome   to the jungle';

//Bruteforce Approach
// Time Complexity: O(N),We traverse the string once to collect words 
// (O(N)) and once more to reverse and join them (O(N)). Hence total 
// time is O(N).
// Space Complexity: O(N),We store all words in a separate list/array, 
// requiring extra space proportional to the number of characters.
function reveserWords() {
    let wordArr = [];
    let word = '';
    for (let letter of str) {
        if (letter !== ' ') {
            word += letter
        }
        else if (letter == ' ') {
            wordArr.push(word);
            word = '';
        }
    }

    //to print the last word
    if (word.length > 0) {
        wordArr.push(word)
    }

    wordArr.reverse();
    console.log(wordArr.join(' '));
}
// reveserWords()

//Optimal Approach

// Time Complexity: O(N), We traverse the string once from right to left 
// and construct the result directly without extra passes.
// Space Complexity: O(1),Ignoring the output string, no additional data 
// structures proportional to input size are used.

function reveserWordsOptimal(){
    let result = '';
    let i = str.length - 1;

    while (i >= 0){

        //Removes Expta spaces in the end
        while(i >= 0 && str[i] === ' '){
            i--;
        }

        //End Condition
        if (i < 0) break;

        let end = i;

        while (i >= 0 && str[i] !== ' '){
            i--;
        }

        let word = str.substring(i+1, end+1);

        //prevents Extra Space at begining
        if(result.length > 0){
            result += ' ';
        }

        result += word;
    }
    console.log(result)
}
reveserWordsOptimal();