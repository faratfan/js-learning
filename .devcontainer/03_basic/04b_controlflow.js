console.log("Control Flow/Logic Flow");
console.log("if-else statement");
//all programm should rund on control flow
if(true) {
   console.log("Condition is true");
}
//How the condition true is evaluate
//Comparison Operator =,==,===,>,<,=>,<=,!=
//Example
const userLoggedIn = true;

if(userLoggedIn){
    console.log("Welcom back");
}
//Practice
const logOut = true;

if (logOut) {
    console.log("Press Enter to Log Out");
}
//compariaon == (only value matter)
const name = 'Henry';
if( name == 'Henry'){
   console.log("Welcom back Henry");
}
//Strict comparison (value and type both are considered)
 if(2 == "2"){
    console.log("Executed");
 }
 //
 if( 2=== 2){
    console.log("executed")
 }
//
if( 2 === "2"){
    console.log("Wont work")
}
//!= 
if( 3 != 4){
    console.log("3 is not equal to 4");
}
//If -Else
const temprature = 10;

if(  temprature < 10 );{
  console.log(" Turn up the heater")
   } 
     console.log(" temprature is perfect");
//
const  temp =   45;
if(  temp  === 45){
    console.log("It's hot today ")
}else{//consditinal check
    console.log("its not that hot")
}
console.log("It's perfect to swim outside")
//
const score = 200;

if (score > 100){
    const power = 'fly';
    let speed = '100'
    console.log(`Your power : ${power}, your speed is ${speed}`);
}
    //console.log(`your Power : ${power}`)//Refrence Error scope is not define
    //as we cant acces power variable bcause its inside block scope
// checking  var inside block scope

 const score2 = '300';
 
 if ( score2) {
     var level = 2;
      console.log(`you reached level, ${level}`);
 }
 console.log(`Your can move to level, ${level}`)// inside block scope var could  be access
 //note : the better practice would be to not use var inside scope and use const and let instead
// short hand notation--> using 'implecit scope';
const balance = 1000;
//it is better to avoide implicite block scope
//if(balance > 500) console.log("imolicite block 1"),
//console.log("implicit block 2");
// nested contionals
if (balance < 500){
    console.log("The balance is  less than 500")
}else if (balance < 750) {
    console.log('The balance is less than 750')
}else {
    console.log('The balanc is 1000')
}
//use case of 
const userLoggedIn1 = true;
const debitCard = true;
const loggedInFromGoogle  = false;
const loggedInFromEmail = true;

if( userLoggedIn1 && debitCard){
    console.log('thank you for your purchase')
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log('User Logged In ')
}
//Swith case syntax
//swith (key){
//    case value:

//    break;

//    default 
        // break;
//}
//Using Exampel
const month = 3;

switch (month){
    case 1:
        console.log("Janauary");
        break;
    case 2:
        console.log("Feburary ");
        break;
    case 3:
        console.log("March");
        break;
    default :
        console.log("default")
         break;
}
//Note break helps to ctrol flow of switch statement, use an example to understant;
 const password = 4;

 switch(password){
    case 1: 
    console.log("Password is 1");
    break;
    case 2: 
    console.log("Password is 2");
    break;
    case 3: 
    console.log("Password is 3");
    break;
    case 4: 
    console.log("Password is 4");
    //break; Now the code will not break and run all the values except default
    case 5: 
    console.log("Password is 5");
    break;
    case 6: 
    console.log("Password is 6");
    break;
    default:
        console.log("this is defaut");
    break;
 }

//Truthy and falsy value
//fasy valu
//false,0,-0,bigInt 0n,"",Null,undefine
//truthy value 
//"0",'false'," ",[]empty arry, function () {} empty function,
//To check if an array is empty 

const numbers= [];// take array name check it against its elements  

if(numbers.length === 0){
    console.log("Array is Empty")
}

//To find if an object is empty
const emptyObject= {};
//using Object.key for output in array
if(Object.keys(emptyObject).length === 0){
    console.log("Object is Empty")
}
//interview Question
//false == 0, true
//false == ' ', true
//0 == '',true;

//Nullish Coalescing Operator(??) Null and undefine 
let val1 ;
//val1= 5 ?? 10;
//val1 = null ?? 10
//var1 = undefined ?? 10; 

val1= null ?? 10 ?? 20

console.log(val1);

//Terniary Operator
//Syntax
//
//condition ? true : false
const iceTeaPrice =100;
iceTeaPrice  <= 80 ? console.log("price is less than 80") : console.log("Price is greather than 80");

