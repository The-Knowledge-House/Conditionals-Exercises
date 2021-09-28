//Exercise #1
//Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number. 
// Call that function 2 times with different number pairs
// and log the output to make sure it works 
//(e.g. "The greater number of 5 and 10 is 10")

function greaterNum(a, b){
      
     if (a > b){
        return `he greater number of ${a} and ${b} is ${a} `
     } else {
        return `he greater number of ${a} and ${b} is ${b} `
     }
    
      
}
greaterNum(5, 10)



//Exercise #2
//Write a function named helloWorld that: 
// takes 1 argument, a language code ("es", "de", "en")
// returns "Hello, World" for the given language, for at least 
// 3 languages. It should default to returning English
//Call that function for each of the supported languages and log the 
// resultto make sure it works

function hellowWorld (langCode) {
    if (langCode == "es") {
        return "¡Hola Mundo!"
    } else if (langCode == "de") {
        return "Hallo Welt!"
    } else if (langCode == "en") {
        return "Hello World!"
    } else {
    		return "Sorry, Your language is coming soon!"
    }
}
console.log(hellowWorld("de"));
console.log(hellowWorld("es"));
console.log(hellowWorld("en"));
console.log(hellowWorld("fr"));
 





//Exercise #3
//Write a function named assignGrade that:
//takes 1 argument, a number score
//returns a grade for the score, either "A", "B", "C", "D", or "F"
//Call that function for a few different scores and log the result 
//to make sure it works

function assignGrade(num){
  

    switch(true){
        case  num >= 90 :
         console.log("A");
        break;
 
        case  num >= 80 :
         console.log("B");
        break;
 
        case num >= 70  :
         console.log("C");
        break;
 
        case num >= 65  :
         console.log("D");
        break;
        
        default:
         console.log("F");
        
 
    }
 }
 
 assignGrade(80)







//Exercise #4
//Write a function named pluralize that:
//takes 2 arguments, a noun and a number
//returns the number and pluralized form, like "5 cats" or "1 dog"
//call that function for a few different scores
//and log the result to make sure it works
//Bonus: Make it handle a few collective nouns like "sheep" and "geese"

function pluralize (noun, number){
    function pluralize(noun, number) {
        if (number != 1 && noun != 'sheep' && noun != 'geese') {
          return (`There are ${number} ${noun}s'`);
        } else {
          return (`There is only ${number} ${noun}`);
        }
      }
      
      pluralize('cat', 2)

}