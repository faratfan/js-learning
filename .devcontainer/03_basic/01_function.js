//Function (a code encased inside a package)
console.log("Hey there");
console.log("Hey there");
console.log("Hey there");

function sayhi(n){
    for (let i = 0; i <= 3; i++){
        return "Hey There";
    }
}
console.log(sayhi(3));

function  hername(){
     console.log("F");
     console.log("A");
     console.log("R");
     console.log("A");
     console.log("T");
}
hername();
//Function to add two number
function addTwoNum( num1 , num2){
   console.log(num1+num2);
}

addTwoNum( 1,1);
//alternative case scenario(incase we pass a string)
function addTwoNumber( number1 , number2) {
    console.log(number1 + number2);
}
addTwoNumber(6,"5");//OutPut-->65 as  Javascript will convert string after number and rather then addig it into the other number it will proceed to write  beside.
//Checking another case 
function  addString(  m , n ) {
    return m + n;
}
console.log(addString(3,"a"));//OutPut-->3a
//checking against null
function addNull(m,n) {
    return m + n;
}
console.log(addNull(1 ,null));
//Checking Use Case of return statement  
function addition( m , n ) {
     let result = m + n;
     return result;

}
console.log("Result: ",addition(4,4));
//Checking Use case sceniro of stement after return 
function subtractTwoNum( m,n) {
     let result = m-n;
     return result;
      console.log("It will not print");
}
console.log("Result:",subtractTwoNum(6,2));//OutPut 4, however statement  after retun didnot pritn b/c of the rule of  javaScript

//use case scenarion [return statment and storing in variable]

function multiply(m,n){
    return m*n;
}
 const result = multiply(2,3);
 console.log(result);
 //
 function loginUserMessage(username){
    return `${username} just logged in `
 }
 loginUserMessage(farat);
 console.log(loginUserMessage());




