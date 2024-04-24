/* objects are declare 2 ways 1: litral, and constructor and another way //singleton--> just sing object no othe instance like it(while literal  )*///(give attention to Events as well)
/*
//##Object Literals
//Understanding Symb(ols in Js ; 
const mySym = Symbol ("Key1");//declaring a symbol in js;
//## to use a symbal in object as a key we have to first declare it;
const JsUser = {
  name : "fan",
  "fullname": "Farant Naeem",
  mySym: "myKey1",//Take mySym variable and set it value as you wish 
  age : 16,
  email:"faratnaeem9@gmail.com",
  location :"London",
  isLoggedIn: true,
  lastLoginDays: ['Monday','Saturday']

}

console.log(JsUser.email);//-->output faratnaeem9@gmail.com
//console.log(JsUser[email]);//--> Refrence Error email is not defined .
//using dot notation and bracket notation
console.log(JsUser["email"]);//OutPut is faratnaeem9@gmal.com  ; as email is treated as a string in our object we add  Quoation marks around email to access it.
//console.log(JsUser."fullName");--> avoid using dot.notion to acces string  in object literal
console.log(JsUser["fullname"]);
console.log(JsUser.mySym);//the Output is printed myKey1 however it is not printed as a key of objetJ
console.log(typeof JsUser);//output object
console.log(typeof JsUser.name);//output string in object JsUser
console.log(typeof JsUser.mySym);//eventhough mykey1 did print on  terminal ,however it a symbo so it should appear symbol in console. */
//The way to  apporach the issue is symply put bracket around mySym in object

//--> make anothe copy of entire  process and try again to access Symbol from object.

const mySym = Symbol ("Key1");//declaring a symbol in js;
//## to use a symbal in object as a key we have to first declare it;
const JsUser = {
  name : "fan",
  "fullname": "Farant Naeem",
  [mySym]: "myKey1",//Take mySym variable and set it value as you wish 
  age : 16,
  email:"faratnaeem9@gmail.com",
  location :"London",
  isLoggedIn: true,
  lastLoginDays: ['Monday','Saturday']

}
//console.log(JsUser);
console.log(JsUser.age);
console.log(JsUser.fullname);
console.log(JsUser['fullname']);
//console.log(JsUser.mySym);
console.log(typeof JsUser.age);
console.log(JsUser[mySym]);
//console.log(typeof JsUser.mySym);
//  reassinging new value to a key 
const a = JsUser.age = 20;
console.log(a);

console.log(JsUser);
delete JsUser.fullname;
//console.log(JsUser);

JsUser.email = "faratnaeem9@yahoo.com";
console.log(JsUser.email);
//Incase we want to stop any change we can use freez method on object 
//##Object.freeze(JsUser);//after Object.freez() no change will be implemeted;
//JsUser.name = "Farat";
console.log(JsUser);

//In Js Functions are treated as 1st class citizen(treted as variables)
      //... functions are called methods in object
JsUser.sayHi = function () {
   console.log("I am moving rapidly fast");
}
console.log(JsUser.sayHi());//output--> I am moving rapidly fast
//console.log(JsUser.sayHi);//output-->[function anonymous]... This means function isn't executed however it refrence is in output .
//declare another function that takes a parameter from object itself;

JsUser.sayHi2 = function () {
  console.log(`Hello my name is, ${this.name}. and my email address is, ${this.email}`);
}
console.log(JsUser.sayHi2());//OutPut--> Hi my name is Farat and my email addres is faratnaeem9@yahoo.com


