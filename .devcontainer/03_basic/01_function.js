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
 
 console.log(loginUserMessage("Farat"));

//use case scenario with  if statement
function  exponent(n ) {
    if(n === ''){
    
     return " you got a string "
}else{
    return  "Enter a  string";
}
}
 console.log(exponent("nayab"));
 //  checking if statement  with function
 function enter(user) {
    if (user === undefined){
        return "Please enter a valid user name"
    }
    else if (user === "Nayab123") {
        return `Welcom  ${user}, where have you been`;
    }else {
      return  "Wrong name try again";
    }


}
 //console.log(enter("Nayab123"));
 console.log(enter());
//use case of false value
function logged(username){
    if(!username){//---> (username === undefine)
        return " wrong username";//if value is false, we wont be able to use this code so we use !username;
    }else (username === "Im groot")
            return `Welcome ${username},`;
    }
//use case scenario of -->default value<--(if there is no argument from user)
function singin( username = "Fan"){
    return `Welcom ${username}`;

} 

console.log(singin("Saba"));//-->Saba here will be override;
//Function  with objects and array
//Shopping cart Example(parameter and aguments)
function addCartPrice(...num1){//...using rest/spread operator to read more than 1 value;
    return num1;

}
console.log(addCartPrice(200, 300, 4000));//output-->[200,300,4000]
//Practice for rest operator
function addnames(...names){
    return names;
}
console.log(addnames('Puffy','April','Luna'));//OutPut-->in 1 array
//Prameters with rest operator
function checkValues(val1, val2, ...num1){
    return  num1;
}
console.log(checkValues(100,200,300,400));//Output[300,400],(300=Val1,200=val2)
//function with object 
const user ={
    username: "farat",
    course: "JavaScript",
    cost: 99.9,
       

}
function handleObject(anyObject) {
      console.log (`Username is ${anyObject.username} , The course is ${anyObject.course},and price is ${anyObject.cost} `);
}

handleObject(user);

//directly passing object in function

function streakCount(anyObject){
    console.log(` User ${anyObject.username} is online and her streak count is ${anyObject.streakCount}` )
}
//--->Passing/creating object  while calling function
streakCount({
    username :'April',
    mood: 'grumpy',
    count : 9,
});
//Array in functions
/*
function days(alldays){
    console.log(`User works ${alldays.days[1]}`)
}
days([
    'Monday','Tuesday','Wednesday','Thursday'
]);*/
const myArray = [1,2,3,4];

function returnThirdVal(getnumber) {
    return getnumber[2];

}
console.log(returnThirdVal(myArray));
//Paasing array directly
function returnFirstVal(getnumber){
    return  getnumber[0];
}
console.log(returnFirstVal(['1','2','3']));
