//Exercise #1
//Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number. 
// Call that function 2 times with different number pairs
// and log the output to make sure it works 
//(e.g. "The greater number of 5 and 10 is 10")


function greaterNum(a,b){
    if ( a>b){
        console.log("A is greater than B");
    } else {
        console.log("B is greater than A");
    }
}

greaterNum(4,5);



//Exercise #2
//Write a function named helloWorld that: 
// takes 1 argument, a language code ("es", "de", "en")
// returns "Hello, World" for the given language, for at least 
// 3 languages. It should default to returning English
//Call that function for each of the supported languages and log the 
// resultto make sure it works.
/**
function helloWorld(arg1){
    switch (arg1) {
        case 'es':
            arg1 = "Hola Mundo";
            console.log(arg1);
            break;
        case 'de':
            arg1 = "Hallo Welt";
            console.log(arg1);
            break;
        default:
            arg1 = "Hello World";
            console.log(arg1);
      }
} 
helloWorld(en);

*/

function helloWorld(lang) {
    if (lang == 'de') {
      console.log("Hallo Welt");
    } else if (lang == 'es') {
      console.log("Hola Mundo");
    } else {
      console.log("Hello World");
    }
  }
  
  console.log(helloWorld('de'));
  
  
  


//Exercise #3
//Write a function named assignGrade that:
//takes 1 argument, a number score
//returns a grade for the score, either "A", "B", "C", "D", or "F"
//Call that function for a few different scores and log the result 
//to make sure it works


function assignGrade(numScore){
    if (numScore < 60){
        console.log("The grade is F");
    } else if (numScore >= 61 && numScore <= 70 ){
        console.log("The grade is D");
    } else if ( numScore >= 71 && numScore <= 80 ){
        console.log("The grade is C");
    } else if ( numScore >= 81 && numScore <= 90 ){
        console.log("The grade is B");
    }else if ( numScore >= 91 ){
        console.log("The grade is A");
    }
}

assignGrade(70);






//Exercise #4
//Write a function named pluralize that:
//takes 2 arguments, a noun and a number
//returns the number and pluralized form, like "5 cats" or "1 dog"
//call that function for a few different scores
//and log the result to make sure it works
//Bonus: Make it handle a few collective nouns like "sheep" and "geese"

function pluralize(noun,number){
    if (number > 1){
    console.log(`${number} ${noun}s`);
    } else{
        console.log(`${number} ${noun}`);
    }
}

pluralize("cat",5);