//Exercise #1
//Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number. 
// Call that function 2 times with different number pairs
// and log the output to make sure it works 
//(e.g. "The greater number of 5 and 10 is 10")

function greaterNum(number1, number2) {
    if (number1 > number2) {
      return number1;
    }
    else {
      return number2
    }
  }
  
  console.log("The greater number of both numbers is " + greaterNum(7, 2));
  console.log("The greater number of both numbers is " + greaterNum(4,9));


//Exercise #2
//Write a function named helloWorld that: 
// takes 1 argument, a language code ("es", "de", "en")
// returns "Hello, World" for the given language, for at least 
// 3 languages. It should default to returning English
//Call that function for each of the supported languages and log the 
// resultto make sure it works

function helloWorld(language) {
    switch (language) {
        case "es":
            return "Hola Mundo";
        case "de":
            return "مرحبا بالعالم";
        case "en":
            return "Bonjour le monde"
        default:
            return "Hello World"
    }
  }
  console.log(helloWorld("es"));
  console.log(helloWorld("de"));
  console.log(helloWorld("en"));


//Exercise #3
//Write a function named assignGrade that:
//takes 1 argument, a number score
//returns a grade for the score, either "A", "B", "C", "D", or "F"
//Call that function for a few different scores and log the result 
//to make sure it works

function assignGrade(number) {
    switch (true) {
      case number >= 90:
        return "A";
      case number <= 89 && number >= 80:
        return "B";
      case number <= 79 && number >= 70:
        return "C";
      case number <= 69 && number >= 60:
        return "D";
      case number < 60:
        return "F";
    }
  }
  console.log("Your letter grade is: " + assignGrade(85));
  console.log("Your letter grade is: " + assignGrade(59));
  console.log("Your letter grade is: " + assignGrade(93));


//Exercise #4
//Write a function named pluralize that:
//takes 2 arguments, a noun and a number
//returns the number and pluralized form, like "5 cats" or "1 dog"
//call that function for a few different scores
//and log the result to make sure it works
//Bonus: Make it handle a few collective nouns like "sheep" and "geese"

function pluralize(noun, number) {
    let string = "";
    if (number > 1) {
      string = number + " " + noun + "s";
    }
    return string;
  }
  console.log(pluralize("cat", 7));