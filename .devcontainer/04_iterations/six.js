//console.log("filter, reduce, map");
const coding =  ["Java","Cpp","Js","ruby", "python"]
// coding.forEach( (item,index,array) => {
//     //console.log(item,index,array);
// })
// //For each has callback function 
// //saving for each in a  data type
// const values = coding.forEach( (items)=>{
//     console.log(items);
// })
// console.log(values);
const myNums =[1,2,3,4,5,6,7,8,9,10];

let newNums = myNums.filter( (num)=>{
  num >  5 ; //--> [] 
})
//console.log(newNums);
//Practice filter
//filter basic structure callback, aray, condition
const Number = [2,4,6,8,10,12,14,16,18,20];
// let newNummber = Number.filter( (num) => 
//      num < 4) //num < 12);{used implicit } as we are not using scope in filter{}
//console.log(newNummber);
//unsig for each
const newNums2 = [];
Number.forEach( (num) =>{
    if (num > 4) {
        newNums2.push(num);
    }
} );

//console.log(newNums2);//Output([6,8,10,12,14,16,18,20]
//practice Array
const array1= [1,2,3,4,5,6];
const array2 = [];

array1.forEach( (num) => {
      if(num > 0) {
        array2.push(num);
      }
})
//console.log(array2);
//filter with or
const novels = [
  {title: 'HarryPotter1', genre: 'Fiction', publish: 1990, edition:1},
  {title: 'HarryPotter2', genre: 'History', publish: 1991, edition:2},
  {title: 'HarryPotter3', genre: 'SuperNatural', publish: 1992, edition:3},
  {title: 'HarryPotter4', genre: 'Fiction', publish: 1993, edition:4},
  {title: 'HarryPotter5', genre: 'History', publish: 1994, edition:5},
  {title: 'HarryPotter6', genre: 'SuperNatural', publish: 1995, edition:6},
  {title: 'HarryPotter7', genre: 'Sci-Fi', publish: 2000, edition:7},
  {title: 'HarryPotter8', genre: 'History', publish: 2001, edition:8},
]
const userBooks=novels.filter( (bk) => bk.genre === 'History' )
//console.log(userBooks);
let userBooks1 = novels.filter( (bk) => bk.edition === 4)
//console.log(userBooks1);
 userBooks1 = novels.filter( (bk) => bk.publish >= 1995)
//console.log(userBooks1);
userBooks1 = novels.filter( (bk) => {return bk.publish <= 1995 && bk.genre === 'History'})
//console.log(userBooks1);
userBooks1 = novels.filter( (bk) => {return bk.genre === 'Sci-Fi' && bk.publish >= '1995' })
console.log(userBooks1);