console.log("High Order Array Loop");
//for of
//string with Array
["","",""]
//Object within Array
[{},{},{}]
//loop>object>.notion/[]notion
const arr = [1,2,3,4,5]
//loop for object
//--> arr
for (const num of arr) {
    //console.log(num);
}
//
const greetings = "Hello World";

for (const greet of greetings) {
    //console.log(`Each Character Is : ${greet}`);
}
//Maps --> store unique value and order is maintaien
//const map = new Map()
//map.set('IN', "India");
//map.set('USA',"United States of America");
//map.set('ENG',"England");
//map.set('LN',"London");
//map.set('IN',"INDIA");//The line wont print as map only store unique value
//console.log(map)
//using loop on map(for of)
for (const index of map) {
    //console.log(`The values are ${index}`);
}
//
for (const key of map) {
    //console.log(`The key is  :- ${key}`);
}
//key-value,De-Structure Array
for (const [key,value] of map) {
   // console.log(`The key ${key}, value ${value}`);
}
//Practice
const map2 = new Map()
    //Capital city 
    map2.set('LN', "London");
    map2.set('PR',"Paris");
    map2.set('DC',"Washington");

    //console.log(map2);
  // using loop For of on map2
   for (const index of map2) {
    //console.log(`The Values are : ${index}`);
   }
   for (const [key , value] of  map2) {
      //console.log(`The key ${key} and the value ${value}`);
      //console.log(key,':-',value);
   }
//Practice 2
const map3 = new Map()
map3.set('1',"Object")
map3.set('2',"Array")
map3.set('3',"Function")

//console.log(map3);
for (const index of map3) {
    //console.log(`The order is : ${index}`);
}
//De structure Array
for (const [key,value] of map3) {
    //console.log(` the key and value is ${key,':-', value}`);
}
//Using For Of Loop on Object(will not work)
/*const myObject ={
    game1 : 'Call of Duty ',
    game2 : 'NFS',
    game3 : 'Assasin Creed',
}
for (const [key,value] of myObject) {
    console.log(key,':-',value);//myObject is not iteratable
}*/
//
const map = new Map();
map.set('Item1', "LapTop");
map.set('Item2', "Internet");
map.set('Item3', "code");

console.log(map);
//using for of
//Answer will be generated in Array
for (const key of map) {
    
   console.log( key);

}
//using key - value concept
//for (const [key, value] of map) {
   // console.log(`key:- ${key} , value:- ${value}`);
//}