//#### Objects and loop
const myObject ={
    js : 'JavaScript',
    ph : 'Python',
    cpp: 'c++',
    rb : 'ruby',
    swift: 'swift',
    html : 'HyperText MarkUp Language'  
}
//for in loop on object
for (const key in myObject) {
    // (Object.hasOwnProperty.call(object, key)) {
       // const element = object[key];
       console.log(key);
        console.log(`The key ${key} shortcut is for ${myObject[key]}`);
    }
//practice 
 const myObject2  = {
     1 : ' html',
     2 : 'CSS',
     3 : 'JavaScript'

 }

 for (const key in myObject2) {
    
        console.log(key)
        console.log(` the key, ${key}, of myObject2 ${myObject[key]}`);
    }

//for in on Array
const lang =  ['JS','Rubby','CPP'];
for (const key in lang) {
    console.log(key);
    console.log(lang[key]);
    }
    //note: forof give as the value however forin print just ke while usi g it on Array 

//practice for in on Array
const todo_list = ['Coding', 'Math ','Physics'];

for (const key in todo_list) {
    console.log(key);
    console.log(todo_list[key]);
}
//checking forin on maps
const map  = new Map();
map.set('Sk',"SaudiArabis")
map.set('pk',"Pakistan")

//for of
//for (const [key,value] of map) {
    //console.log(key);
   // console.log(`The key  is ${key} ,value is :${value}`);
//}
//for in 
//for (const key in map) {
    //console.log(key);
        
  //  }// The output will be blank  as the Map is not iteratable


