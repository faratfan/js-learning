//Singleton Object 
//Suppose you are creating an app
//--->[singleton object syntax]const airbnbUser =  new Object ();//One way to create an object;with output{} empty object
//-->[non-singlton]const airbnbUser = {}; //Output empty Object
//console.log(airbnbUser);//OutPut an empty object;
 const airbnbUser = {}
 airbnbUser.id = "Puffy456";
 airbnbUser.name = "Puffy";
 airbnbUser.isLoggedIn = false;

 //console.log(airbnbUser);
//Object in an Object
 const regularUser ={
    email : "puffy@gmail.com",
    fullname:{
        userfullname:{   
       firstname: "Puffy",
       lastname: "Bhatti",
    }
 } 
 }
 //Accesing Object inside other objects with bracket notation.
// console.log(regularUser["fullname"]);
// console.log(regularUser["fullname"]["userfullname"]["firstname"]);

//Dot notation 
console.log(regularUser.fullname.userfullname.firstname);//Output--> Puffy

//Joinning Objects
const object1 = { 1:"a",2:"b" }; //target in .assign() methode
const object2 = { 3:"c",4:"d"};//Source
const object4 = { 5:"e",6:"f"};//Source in .assign method;

//const object3 =  {
   // object1, object2
//};
//console.log(object3);//Output--> {object1: {'1','2','3'},object: {'4','5','6'}}
//const obj3 = Object .assign(object1,object2);
//console.log(obj3);//{'1':a,'2':'b','3':'c','4':'d'}##.assign copy enmumerable from taget object
//const obj3 = Object.assign({},object1,//object2,object4);//{} empty parenthesis is a way to ensure that a guranted space is created for Object to ,put value in
//however spread operator in way more convient
const obj3 ={...object1, ...object2}
//console.log(obj3);//
//values get from database, comes in form of array object
const users = [
   {
      id:1,
      email:"Puffybhatti6@yahoo.com", 
   },
   {
      id:2,
      email:"AprilChurail7@gamil.com"
   }

]
console.log(users[1].email);
console.log(airbnbUser);

//usefull method
//1-->Object.keys--> Provide all keys of the object in an array
console.log(Object.keys(airbnbUser));
//using Object.value()
console.log(Object.values(airbnbUser));
//Object.entries() [key:value] in array
console.log(Object.entries(airbnbUser));
//Looping and getting value // and saving it from crash in that case we use .hasOwnProperty to save it from crash
console.log(airbnbUser.hasOwnProperty('isLoggedIn'));//OutPut-->true
console.log(airbnbUser.hasOwnProperty('isLogged'));//-->false
