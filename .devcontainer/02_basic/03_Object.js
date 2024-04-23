/* objects are declare 2 ways 1: litral, and constructor and another way //singleton--> just sing object no othe instance like it(while literal  )*///(give attention to Events as well)

const mySym = Symbole("Key1");
const JsUser ={
    name : " Fann",
    "fullname": "Farat Naeem",
    age : 28,
    [mySym]: "mykey1",
    location : "London",
    email:"faratnaeem9@gmail.com",
    isLoggedIn : false,
    lastLoginInDays: ["Monday","Saturday"]


}
//we can defin e key - value
//console.log(JsUser.email);
console.log(JsUser['email']);//--> adding string and  deleting dot.as emaile is saved as string .
console.log(JsUser[fullname]);
console.log(JsUser[mySym]);
//console.log(JsUser.mySym);



