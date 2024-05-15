console.log("Iterations") 

for(let i = 0 ; i <= 10; i++ ){
    console.log(i)
}
const array = [1,2,3,4,5,6];
/*for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    
}*/
for (let i = 0; i <= array.length; i++) {
    const element = array[i];
    if(i == 5){
        console.log('5 is the best number');
    }
    console.log(element);
}
console.log(array);
//console.log(element)
const names = ["puffy","April","Jaggi","Luna","Ozzy","Jalebi"]
 for( let  i = 0 ; i <= names.length ; i++){
    const result = names[i]
    console.log(result);
 } 
//Nested fr loop
 /*for (let i = 0; i <= 10; i++) {
    //outerloop
    //console.log(`This is outer loop: ${i}`);
    for (let j = 0; j <= 10; j++) {
        //innerlop
        //console.log(`This is inner loop ${j} , this is outer loop: ${i}`);
        console.log(i + 'x' + j +'=' + i*j );
    }
    
 }*/
  
        