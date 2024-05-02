//What is Scopes {}
//where and what varaible  is available in a program is called scope
// let a = 20;
// const b = 30;
// var c = 50;

// console.log(a);
// console.log(b);
// console.log(c);
//var c = 300;
//Block Scope
function scope() {
///-->Here these curly braces are scope of the fucntion
}
if (true){
    // Here { } are scope of this if statement
   let a = 10;
   const b = 20;
    var c = 30;
}
// Checking Scope of let,const, var
   //console.log(a);//-->Referenced Error
   //console.log(b);//--> Reference Error
console.log(c);//-->OutPut 30



//1-Globle 2- Locale 3- block
//Global Scope
let  Array1 = [1,2,3,4,5];

function  countlength( getArray){
    console.log(getArray.length)
}
console.log(countlength(Array1));//output is 5
// here Array1 is a global varaible  means available or can be acces from any where from program. 

// Local Scope

function  greeting(){
    const  sentence = "Hey There" ;
    return sentence;
}

console.log(greeting());//output "Hey There"
//console.log(sentence);//Reference Error : sentence is not defined(not available) as sentence is locale variable

// 
let a1 = 500; //Globle Scope

//Block Scope
if(true){
    let a1 = 50;
    console.log("Inner: ",a1);
}

console.log(a1);
    
 //Scopes are very different in Console(e.g --> Google>Inspect>console) and in node runtime enviorement.
 