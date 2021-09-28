//Exercise #1
//Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number. 
// Call that function 2 times with different number pairs
// and log the output to make sure it works 
//(e.g. "The greater number of 5 and 10 is 10")

function greaterNum(num1,num2){
       if (num1 > num2){
         return num1
       }
      else if(num2 > num1){
         return num2
       }
     }
     console.log(greaterNum(60,40))
     console.log(greaterNum(40,20))





//Exercise #2
//Write a function named helloWorld that: 
// takes 1 argument, a language code ("es", "de", "en")
// returns "Hello, World" for the given language, for at least 
// 3 languages. It should default to returning English
//Call that function for each of the supported languages and log the 
// resultto make sure it works

function helloWorld(argu){
       if (argu == "es"){
         return "Hola, Planeta"
       }
       else if(argu == "de"){
         return "Hallo Wereld"
       }
       else if(argu == "en"){
         return "Hello, World"
       }
       else{
         return "Hello, World"
       }
     }
     helloWorld("de");
     helloWorld("en");
    helloWorld("es");






//Exercise #3
//Write a function named assignGrade that:
//takes 1 argument, a number score
//returns a grade for the score, either "A", "B", "C", "D", or "F"
//Call that function for a few different scores and log the result 
//to make sure it works

function greaterNum(num1,num2){
       if (num1 > num2){
         return num1
       }
       else if(num2 > num1){
         return num2
       }
     }
     console.log(greaterNum(60,40))
     console.log(greaterNum(40,20))







//Exercise #4
//Write a function named pluralize that:
//takes 2 arguments, a noun and a number
//returns the number and pluralized form, like "5 cats" or "1 dog"
//call that function for a few different scores
//and log the result to make sure it works
//Bonus: Make it handle a few collective nouns like "sheep" and "geese"

function pluralize(noun,num){
    if (noun == "sheep" || noun == "geese"){
      return noun
    }
    else if(num === 1){
      return num + " " + noun
    }
    else if (num > 1){
      let a = num + " "+ noun + "s"
      return a
    }
  }
  console.log(pluralize("bat", 20))
  console.log(pluralize("banana", 12))
