//Date in JS-->>notes ,TC39
//using Temporal.Now.instance
//let myDate= new Date()//object<-->instance
//console.log(myDate);
//console.log(myDate.toString());//using string meathod to get cordinate values in readable form
//console.log(myDate.toDateString())//-->output(Tue Apr 16 2024)
//console.log(myDate.toISOString())//-->2024-04-16T17:21:57.814Z
//console.log(myDate.toJSON())-->2024-04-16T17:21:57.814Z
//console.log(myDate.toLocaleDateString())//-->4/16/2024
//console.log(typeof myDate)-->object-> Date is an object in javascript
//let myCreatedDate = new Date(2023, 0,24,5,3);
//console.log(myCreatedDate);//-->2023-01-23T00:00:00:000Z
//console.log(myCreatedDate.toDateString());//-->Mon Jan 23 2023
//console.log(myCreatedDate.toLocaleDateString());//--->1/24/2023
//###In JS Months starts from 
//###undestainding timeStamping--> knowing exact timing while desinging polls and quizzes
//let myTimeStamp = Date.now();
//console.log(myTimeStamp);//-->the output will be a long digit which include date time and milliseconds.
//###How to extract millie second
//while making hotel app we need room booking exact time to comapare dates
//###to change in seconds

//let myCreatedDate = new Date("01-14-2023") 
//console.log(myCreatedDate.getTime());
//let myTimeStamp = Date.now();
//console.log(Math.floor(Date.now()/1000));
// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth() +1);//+1 as jan in js start from 0;
// newDate.toLocaleString('default',{
//  weekday: "long",
//  timeZone: "23T00"
// })
// console.log(newDate);