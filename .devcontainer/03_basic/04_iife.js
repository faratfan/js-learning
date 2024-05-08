console.log("IIFE")
//Whay we need Immedatly envoke function expression: written function execute upon writting.
//e.g--> written file of database execute upon opening application
//avaid pollution  from global scope / vatiable pollution from global scope

//Basic function
function one(){
    console.log(`DB Connected`);
}
one(),
//Syntax error
//function two{
    console.log(`DB Connected One`);
//}()//Syntax Error
//How ever if we put paranthesis around function defination then 
(function three(){
  console.log(`DB Connected Two`);
})();//output->BD Connected ()
//()funtion expression () function call
(function four(){
    console.log(`DB Connected Four`);
});
//While invoking function alway put semi colon to  exit the context
//IIFFEE with arrow function
( () => {
    console.log("Database is Connected");
})();
//Checking IFFE arrow function with parameters and arguments
( (name) => {
   console.log(`DB Connected , ${name}`)
})('April');
//Summary 
//Remember to alway use ; while writting multiple if
//named Iffe
(function cake(){
    console.log(`Cakes are great`)
})();
//arrow function
( (num)=> {
    console.log(` Number is :  ${num}`)
})(2);
//unamed  iife 
( (char)=>{
    console.log(`The character is : ${char}`);
})('b');
