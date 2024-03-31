//console.log('completing all my tasks today')
//general comparison
 console.log(2 > 1);
 console.log(2 >= 1)
 console.log(2 < 1);
 console.log(2<=1);
 console.log( 2 != 1);
 console.log( 2 == 1);
//## comparison string

console.log("2" > 1);
console.log("02" > 1);
// the results  are 
// true 
// true-->javascript covert all string data types in numbers. in however in typescript we cant compare to different data type.
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//The output will be 
//false
//false
//true
//The reason is that an equality  check == and comparison > < >= <= works differently.
//comparison covert null to a number, treating it as 0. thats why  null >= 0 is true and null >0 is false
//## checking comaprison for undefined cases

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined <0 );
//===//strict check, check value and datatypes as well
console.log("2"== 2)// conversion happn son 2== 2 -> return true.
//while// 
console.log("2" === 2);
//summary:

