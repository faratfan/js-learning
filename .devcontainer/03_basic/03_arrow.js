
const user ={
    username: "Fann",
    cost : 999,
 //Use `this` to represnt current context; 
    greeting : function (){
        console.log (`hey ${this.username}, the price is ${this.cost} `);
        console.log(this);//print the context on the other hand  same commad in window browser different
    }

}
// console.log(user.greeting(user))
// user.cost = 1000;
// console.log(user)
console.log(this)//0utput--> {} empty object--as for this the current context is empty
//Checking arrow function
const add = (n) => {
   return n;
}
//console.log(add(4));

//Checking arrow and this function 
//Why we cant use this in arrow function 
//Example of email log in
const newUser = {
    username : "Farat",
     message  : "You 've got a new message",
     greetings :  () => { 
        console.log(`welcome back ${this.username} , ${this.message}`)

}
}
//console.log(newUser.greetings(newUser));
//checking this within a function
function cake(){
    console.log(this);
}
cake()
//Checking use case 
function cookies(){
    let name ="Puffy";
    console.log(this.name)
}
cookies()//undefine
//this works with method within object  but not with function alone
//using this with arrow function
const movie = () => {
    let fav = "Beauti anf the Beast";
    console.log(this.fav)
} 
movie();//output undefine
//basic/explicit Arrow function structure
 const  subtract = (num1 , num2) =>{
    return  num1-num2;
 }
 
 console.log(subtract(6,4));
 //Implicite Arrow function
 //const sub = (num1,num2) => num1-num2 ;//output 2
 const sub1 = (num1,num2) => (num1-num2);//output 2
 console.log(sub1(6,4))
 //note: in case of return we must use curly braces;

//returning object with function
const names = (num1, num2) => {username:"Fan"};

console.log(names())//undefine

const name1 = (num1, mnum2) => ({username:"Farat"});
console.log(name1())//Farat --> must add parathenses around object to print 
