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
console.log("Part 1 : Code Execution");
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
   Here Cycle 1  is completed 
   3- Execution phase 
   value = 10;
   value = 5;
   --> now we have got result1= addNumber(value1, value2) as at result1 we called a function so another excution enviorment is created and in this phase a 'new variable enviroment' and a 'new execution thread' is created.
   ##Note:  Whenever a function is invoked, a new execution environment is created with new variables and a new execution thread.
   this is called a new exection enviorment.
   because of this new execution enviorment the 2 phases are repeated for addNumber() 1- Memomry creation phase and 2- Execution phase
   in new Memory creation all the variable with the funtion variable is gathered
   //Memory /creation phase for addNum()
   value1 : undefine
   value2 : undefine
   add(value1, value2)
   total : undefined 
   //Execution Phase for addNum()
     value1> num1 : 5;
     value2> num2 : 10;
     total >num1+num2= 15;
     Now as this function also return total will be return to global or parent excution context.
     from here the newly created execution context for addNum() is deleted
     the result of addNum(valu1,value2) is stored in execution phase
     result1= 15;
     as at result2= addNum()is again invoke so another sand box is created 
     with NVE(new variable enviorment) and new thread
     where new memory creation phase is created , variable are stored and in execution all is executed and total again is return to Parent/Global Execution Environment 
    
   */
  console.log("Understanding Call Stack");
  /*avaScript uses a Call Stack to track the functions in a program. The call stack works on the Last In, First Out (LIFO) principle. This means that the most recently called function will be the first to be completed. Whenever a function is called, a new frame is added to the top of the stack.*/
