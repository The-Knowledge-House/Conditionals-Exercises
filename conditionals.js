//Exercise #1
//Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number. 
// Call that function 2 times with different number pairs
// and log the output to make sure it works 
//(e.g. "The greater number of 5 and 10 is 10")
function greaterNum (num1, num2) {
    if (num1 > num2) {
        return `The greater number of ${num1} and ${num2} is ${num1}`;
    } else {
        return `The greater number of ${num1} and ${num2} is ${num2}`;
    }
}
console.log(greaterNum(25, 91));
console.log(greaterNum(500, -9));



//Exercise #2
//Write a function named helloWorld that: 
// takes 1 argument, a language code ("es", "de", "en")
// returns "Hello, World" for the given language, for at least 
// 3 languages. It should default to returning English
//Call that function for each of the supported languages and log the 
// result to make sure it works
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
function assignGrade(score) {
	switch(true) {
  	case score <= 100 && score > 90:
    	return "Your Grade is: A";
    case score <= 90 && score > 80:
    	return "Your Grade is: B";
    case score <= 80 && score > 70:
    	return "Your Grade is: C";
    case score <= 70 && score > 60:
    	return "Your Grade is: D";
    case score < 50:
    	return "Your Grade is: F";
    default:
      return "please enter a valid number grade.";
  }
} // EoF

console.log(assignGrade(101));
console.log(assignGrade(100));
console.log(assignGrade(81));
console.log(assignGrade(50));
// why were break statements useless?
// why use true instead of score?



//Exercise #4
//Write a function named pluralize that:
//takes 2 arguments, a noun and a number
//returns the number and pluralized form, like "5 cats" or "1 dog"
//call that function for a few different scores
//and log the result to make sure it works
//Bonus: Make it handle a few collective nouns like "sheep" and "geese"
function pluralize(aNoun, numb) {
    if (numb != 1 && aNoun != 'sheep' && aNoun != 'geese') {
        return numb + " " + aNoun + "s";
    } else {
        return numb + " " + aNoun;
    }
}
console.log(pluralize('cat', 0) + " in my home.");
console.log(pluralize('sheep', 19) + " in my closet.");
console.log(pluralize('elephant', 1) + " in my bathroom.");