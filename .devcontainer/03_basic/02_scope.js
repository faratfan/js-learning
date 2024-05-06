//What is Scopes {}
//where and what varaible  is available in a program is called scope
// let a = 20;
// const b = 30;
// var c = 50;

// console.log(a);
// console.log(b);
// console.log(c);
//var c = 300;
//Block Scope
function scope() {
///-->Here these curly braces are scope of the fucntion
}
if (true){
    // Here { } are scope of this if statement
   let a = 10;
   const b = 20;
    var c = 30;
}
// Checking Scope of let,const, var
   //console.log(a);//-->Referenced Error
   //console.log(b);//--> Reference Error
console.log(c);//-->OutPut 30



//1-Globle 2- Locale 3- block
//Global Scope
let  Array1 = [1,2,3,4,5];

function  countlength( getArray){
    console.log(getArray.length)
}
console.log(countlength(Array1));//output is 5
// here Array1 is a global varaible  means available or can be acces from any where from program. 

// Local Scope

function  greeting(){
    const  sentence = "Hey There" ;
    return sentence;
}

console.log(greeting());//output "Hey There"
//console.log(sentence);//Reference Error : sentence is not defined(not available) as sentence is locale variable

// 
let a1 = 500; //Globle Scope

//Block Scope
if(true){
    let a1 = 50;
    console.log("Inner: ",a1);
}

console.log(a1);
    
 //Scopes are very different in Console(e.g --> Google>Inspect>console) and in node runtime enviorement.
 console.log("Hey There , how you doing?");
 //Nested Scope
 function one(){
    const username = "Farat" ;
    function two() {
        const website = "youtube";
        console.log(username);
    }
    //console.log(website);//Error ---> as website is inside function two
    two()//nested function can acces parent function variable(child can acces variabl of parent variable) 
 }

one();//->clouser has thw ability to acces all objects of the functions
//If example use case scenario
if(true){
    const username = "Fann"
    if(username === "Fann" ){
        const website = "youtube"
        //console.log(username +" "+ website);
    }
    //console.log(website)
} 
//console.log(username);
//closure function use case
 //Basic Function
function addone(num){
     return num +1;

} 

//Function/Expression 
const addTwo = function (num){
     return num +2;
}
console.log(addTwo(3));
//Hoisting concept in js-function
// checking hoisting concept with basic function

console.log(exponent(2));

function exponent(num){
    return num **num;
}
//checking  hoisting with expression 

console.log(multiply(2,2))//Hoisting--> Refrence Error-> connot access 'mulyiply' before intialization/ hoisting does not work in function expression
const multiply = function(num1, num2){
    return num1 * num2;
}
//console.log(multiply(2,4));--> 


