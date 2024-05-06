//console.log("Lets get going");
//console.log("Check agian");
const user ={
    username: "Fann",
    cost : 999,
 //Use `this` to represnt current context; 
    greeting : function (){
        console.log (`hey ${this.username}, the price is ${this.cost} `);
    }

}
console.log(user.greeting(user))
//Checking arrow function
const add = (n) => {
   return n;
}
console.log(add(4));
