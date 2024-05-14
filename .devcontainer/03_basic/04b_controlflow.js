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
 
 if ( result) {
     var level = 2;
     console.log(`you reached level, ${level}`);
 }




