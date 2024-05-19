console.log("For each loop");
const lang = ['js','ruby','java', 'py','cpp']
//no name for callback function 
//
lang.forEach(function (val) {
      //console.log(val);
})
//using arro wfunction
lang.forEach( (item)=> {
  //console.log(item);
})
//
function printMe(item){
    //console.log(item);
}
lang.forEach(printMe)//--> as a call back this fuction just need refrence  not()
//parameter, index, array in for each
lang.forEach( (item , index , array) => {
    //console.log(item, index, array);
})
//[{},{},..] Object in array

const  coding = [
    {
        languageName : "javascript",
        languageFileName : "JS",
    },
    {
        languageName : "Python",
        languageFileName:"py",
    },
    {
        languageName : "C++",
        languageFileName:"cpp",
    },
    {
        languageName : "Ruby",
        languageFileName:"rb",
    },

]
coding.forEach( (items) => {
    console.log(items.languageName);
    //console.log(items.languageFileName);
})