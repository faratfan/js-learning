const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//let newNums = myNumbers.map( (num) => num +10);
//understanding chaining
const newNums = myNumbers
        .map( (num) => num * 10)//value start from 1
        .map( (num) => num + 1)//value start from 10 and map adds 1 = 11,//output[11,21,31,,41,51,61,71,81,91,101]
        .filter( (num) => num >= 40)//[41,51,61,71,81,91,101]
console.log(newNums);
//newNums = myNumbers.map( (nums) => {return nums * 2});
//console.log(newNums);