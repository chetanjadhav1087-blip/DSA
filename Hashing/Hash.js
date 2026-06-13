const array = [1,2,1,3,2,4,5,3,4,5];
const hash = {};

for(let i=0; i<array.length; i++) {
    const element = array[i];
    console.log(`hash element  ${hash[element]}`);
    if(hash[element]) {
        hash[element] += 1;
        console.log(`${hash[i]}`);
    } else {
        hash[element] = 1;
    }
}

console.log(hash);