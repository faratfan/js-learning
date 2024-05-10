console.log("code execution in javascript")
//Code execution 
//call stack 
//JavaScript execution context ( run in 2 phases)
//1-Globel Execution context
//--> Whenever we creat a file first Global EC/Globel Execution context is run--> this Global contex is refered into 'this'. while in window Global EC is  window Object: node , deno ans Bun all have their own global EC.As JavaScript works in  thread that means it every proces is a single thread.
//2- functional Execution Context
//3-Eval Execution context
//####### Now the code is run in two  phases--> Memory creation phase/or just creation phase
//other is Execution  Phase
let value1 = 5;
let value2= 10;

function addNumber(num1, num2){
    let total = num1 + num2;
    return total;

}
let result1= addNumber(value1,value2);
let result2= addNumber(10,10);

console.log(result1);
console.log(result2);


let val1 = 5;
let val2 = 10
// Taking example of above code  first the Globel Execution context is created => as it is a node engine so the code is run in 'this'

//Then the code is executed in 2 phase
//--> in memory creation phase  all the varaiable is gather 
/* value1 : undefine--> as just the variable is gather 
   value2 : undefine
   addNumber: function defination in above code from line 14 the entire defination(num1, num2){
     let result = num1 + num2;
     return result ; 
   }--> entire is saved in memory
   result1:undefine
   result2:undefine
   Here Cycle 1  is copleted 
   now for cycle 2 
   */

