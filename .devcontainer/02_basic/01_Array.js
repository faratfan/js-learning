//Arrays are non-primitive datatype
//##const myArr = [0,1,2,3,true,"Fann"]//Array is a datatype where wwe can store multiple type of elements
//---console.log(myArr);//in javascriot array are resize able. we can introduce new element in array later,Array can contiane : number, boolean , strings and even array --> we called nested array.
//console.log(myArr[5]);
//--Javascript array are not associate array, they can not be access using arbitrary strings aas indexes.
//whenever we perform copy operation. js create shallow coppies
//###shallow copies and deep copies 
//-->A shallow  copy of an object is a copy whose propities ahare the same refrence (point to same underline value)meas changes will also be made in orignal array.
//##Deep Copy
//Copies do not share the same refrence point
///Ways to declare array
//const myHeros =['BatMan','SuperMan','AuqaMan'];
//console.log(myHeros);
//const myArr2 = new Array(0,1,2,3,4);
//console.log(myArr2[1]);
//Array Methods

//myArr2.push(5);//push add new element at the end
//myArr2.push(6);// new element at the end
//myArr2.pop();//delete element at the end
//myArr2.shift();//delete element at the begnning 0
//myArr2.unshift(0);//You can add elements to the beginning of an array using methods like unshifthowever, unshift can be less efficient for large datasets because it requires shifting existing elements.For better performance with frequent insertions at the beginning, consider alternative data structures like linked lists.This clarifies the concept, mentions the performance drawback, and suggests an alternative approach. # on the other hand for shorter program it can be used
//myArr2.shift()//--> shift delet first element from array and does not required any parameter
//console.log(myArr2.includes(9));//output false(include meathod is used for questionaire ) the datatype of of result is important rather than result itself as false is a boolean value. we can judge the results
//--console.log(myArr2.indexOf(9));//output is -1,indicates tha there in no such value;

//console.log(myArr2 + myHeros);
//console.log(myArr2.indexOf(3));//--output is 3
//const newArr = myArr2.join()//Adds all the elements of an array into a string, separated by the specified
//console.log(myArr2);//-->result [0,1,2,3,4]
//console.log(newArr);//-->0,1,2,3,4
//console.log(typeof myArr2); //here type of myArr is an object
//console.log(typeof newArr);// but after joint() method the type of object change into string.
//slice, splice
const myArr = [0,1,2,3,4,5];
console.log("A",myArr);//-->orignal array
//---slice
const myNum1=  myArr.slice(1,3);//output will be [1,2] as indexing of elements starts from 0 in js array, we asked the value from 1   so at 1 index we have value 1  and from 3 onwards all elments are left.
console.log(myNum1);
console.log("B",myArr);
//Spice
const myNum2 = myArr.splice(1,3);// here spilce will take away index at 1 to 3 so we will be left with [0,4,5]
console.log( "C", myArr);
console.log(myNum2);
