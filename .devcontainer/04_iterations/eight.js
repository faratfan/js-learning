console.log("reduce")
const myNums =[1,2,3,4,];

const myTotal = myNums.reduce(function(accumulator , currentValue){
    return accumulator + currentValue
}, 0)//0 accumulator value
console.log(myTotal);
//Practice
const newArray = [2,4,6,8,10];

const result =  newArray.reduce(function (preVal, currVal ){
    return  preVal +currVal
},0)
console.log(result);
