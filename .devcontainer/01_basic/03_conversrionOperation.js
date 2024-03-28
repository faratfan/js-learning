 let score = 33;//here we know the type
// console.log(typeof(score));
// console.log(typeof score);
// some time we are working at backend so we don'r always know the type of data e.g where score have came from
//const {score}=req.body// we are not sure where data came from
const scores = "33";
// console.log(typeof(scores));
const valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//
const ans = true;
//
const inNumber= Number(ans);
//console.log(inNumber);
const ans2= false;
const inNumber2= Number(ans2);
// console.log(inNumber2);
//
const anss1= 1;
const val1= Number(anss1);
//console.log(val1);

//converting into Number
//'33' => 33
// "33abc" => NaN
//true => 1;
//false => 0;
//undefine
//null
let isLoggedIn = 1;
let booleanIsLoggedIn=Boolean(isLoggedIn);
 //console.log(booleanIsLoggedIn);

 //1 => true; 0=> false;
 //"" => false;
 //"fann" => true;
 let someNumber = 33;
 let  stringNumber =String(someNumber);
//  console.log(stringNumber);
//  console.log(typeof stringNumber);
//  #########operations##########
let value = 3;
let negValue = -value;
console.log(negValue);
// related operation and results
// console.log(2+4);//
// console.log(2**4);//
// console.log(4-2);//
// console.log(2*4);//
// console.log(2/4);//
// console.log(2%4);//

//contatenate
// let str1 = "hello!";
// let str2 = "Fann";
// let str3 = str1+str2;
// console.log(str3);

// console.log("1"+ 2);
// console.log(1 + "2");
// console.log("1"+2+2);
// console.log(1+2+"2");
// console.log((3+4)*5 %3);

// console.log(true);
// console.log(+true);
// console.log(+"")

// let num1, num2, num3;
// num1 = num2 = num3= 2+2;
// console.log(num1);
// console.log(num3);
//all output => 4;

let gameCounter = 100;
//gameCounter++;Postfix increment, 
//++gameCounter;prefix increment
console.log(gameCounter);

