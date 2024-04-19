const marvel_heros= ["thor","Ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];
//marvel_heros.push(dc_heros);
//console.log("A",marvel_heros);//--> nested array:as array takes all kind of data, so at 0 element: thor , 1:ironman, 2:spiderman at 3:['superman','flash','batman']
//console.log("B",marvel_heros[3][1]);//-->usingbracket method we can access and retrive any element in given array;
//usinf concate method
//const a =marvel_heros.concat(dc_heros);//-->ourput is still same as using push
//console.log(a);
//no if we save same prcess in a new 
// variable answer will be same 
//### spread /using  broken glass analogy
//const all__new_heros = [...marvel_heros,...dc_heros];//---> now all elment merge
//console.log(all__new_heros);
/* practicing 'spread method'
const prac1= ['Puffy Bhatti'];
const prac2= ['April Bhatti'];
const prac3= ['Luna Bhatti'];
console.log(prac1);
console.log(prac2);
console.log(prac3);

const all_babies=[...prac1,...prac2,...prac3];
console.log(all_babies);*/

const newArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_newArr= newArr.flat(Infinity)//Returns a new array with all sub-array elements concatenated into it recursively(also dives us depth to solve/spread an array)

console.log(real_newArr);//.flat is 
//another way to spreat an array/nested arrya;
/*practice
const all= ['puffy','April',['luna','jalbi'],['Ozzy','Griffin',['cherry','brownie']]];
const all_babies2 = all.flat(Infinity);
console.log(all_babies2);*/
//how to scrap data from web
//when we select data from any website it is in list,objex, string but we need string
//isArray
console.log(Array.isArray('Puffy'))//->asking Question is this an array.output is false as the given data is string
console.log(Array.from('Puffy'));//using .from to change into array.

/* practice
console.log(Array.isArray(['1','2']));//true
console.log(Array.isArray('Luna'));//false;
console.log(Array.from("Luna"));*/
//##working with object
console.log(Array.from({name:'Luna', age:1}))//-->output is [] empty array

let score1= 100;
let score2= 200;
let score3= 300;

console.log(Array.of(score1,score2,score3));





