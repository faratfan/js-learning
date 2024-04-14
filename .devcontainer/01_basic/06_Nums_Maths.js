//const score = 400;
//console.log(score)
//Here javascript detect its a number.here score 
//const balance = new Number(100)
//console.log(balance) 
//above there is no wondering of type of number.the output here is [Number:100]
//console.log(balance.toString().length);
//console.log(balance.toFixed(2));
//to.fixed is mostly used to calculate number of fixed to get precison value(used mostly in ecommerce)

//const otherNumber = 23.8966;//as we applied the precision  to 3 digits the output will be 23.9
//const otherNumber = 123.8966; //expected answer 124
//const otherNumber = 1123.8966;//1.12 other value in exponent form so 1.12e+3
//console.log(otherNumber.toPrecision(3));
//const otherNumber = 123.8966;
//console.log(otherNumber.toPrecision(4));
//##### using locale string
//const hundreds = 1000000;
//console.log(hundreds.toLocaleString('en-IN'));
//Max ansd minvalue
//#####Maths /Library######
//console.log(Math);javascript has it own Mathslibrary
//----console.log(Math.abs(-4));//abs-->absolute
//console.log(Math.round(4.6));//output 5 after rounding the value;
//Using ceiling and floor to choose between uper or loweb number to round.
//console.log(Math.ceil(4.6));// output is 5 as 4 is ceiling;
//console.log(Math.floor(4.6));//4
//console.log(Math.min(1,2,3,5));//to chosse minimum value-->1
//console.log(Math.max(1,2,3,4,5));//--> //to select highest number.
//--- Math.random--selects a random number
//console.log(Math.random());--> generate random number between 0 to 1-->output 0.023414
//console.log((Math.random()*10)+1);//-output(3.12354564)--> theanswer could be generate from 0.0111; to avoid scuh scenario as to 0.0  and have non-zero digit ,by adding 1 we ensure  there is non zero digit we add 1. --> output 6.7794566;
//console.log(Math.floor(Math.random()*10)+1) to get lowest  value
//### understanding max and min
const min =10;
const max =20; 
//console.log(Math.random()*(max - min + 1)+ min)// output --> we get 10.402265.. the formula goes--> we apply math.random()that we genrate a random number but as we multiply it by out variables (10 to 30 so number generated will be from , with 10 to 20 next we add a 1 to avoid zero)(max-min+1) after we add min(10 ) as a condition to get a number coloser to our min= 10;variabel;(out put is 10.402265539151)
//console.log(Math.floor(Math.random()*(max-min +1)));//the out put is non-zera but 2,3,6 we on the other hand we want  number from 10 to 20.
console.log(Math.floor(Math.random()*(max - min + 1))+min);//Now our answer is 18--> 









