console.log("reduce")
const myNums =[1,2,3,4,];

const myTotal = myNums.reduce(function(accumulator , currentValue){
    return accumulator + currentValue
}, 0)//0 accumulator value
console.log(myTotal);
//Practice
const newArray = [2,4,6,8,10];

const result =  newArray.reduce(function (preVal, currVal ){
    console.log(`previous Value : ${preVal} and currVal is : ${currVal}`);
    return  preVal +currVal
},0)
console.log(result);


const myTotal1 = newArray.reduce( (acc ,curr)=> acc+curr ,0);
console.log(myTotal1);

const shoppingCart = [
    {
        itemName: "Js course",
        price : 999
    },
    {
        itemName: "HTML course",
        price : 199
    },
    {
        itemName: "Css course",
        price : 299
    },
    {
        itemName: "react course",
        price : 1999
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price,0);
console.log(priceToPay);
//Pracetice

const cinema = [
    {
        movie : 'Action',
        price  : 99

    },
    {
        movie : 'SciFi',
        price  : 999

    },
    {
        movie : 'comedy',
        price  : 991

    },
    {
        movie : 'Fiction',
        price  : 2000

    },
    {
        movie : 'comedy',
        price  : 2000

    },
    {
        movie : 'Fiction',
        price  : 21000

    },
    {
        movie : 'History',
        price  : 2000

    }
]

// const res = cinema.reduce( ( acc,mv) => acc + mv.price ,0);
// console.log(res);
const res1 = cinema.filter( (mv) => { return  mv.movie === 'comedy'}).reduce( (acc, mv) => acc + mv.price,0);

console.log(res1);

