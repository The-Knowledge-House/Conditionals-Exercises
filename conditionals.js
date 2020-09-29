//Exercise #1
//Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs
// and log the output to make sure it works
//(e.g. "The greater number of 5 and 10 is 10")
/*let nums = (5, 10);
function greaterNum(nums) {
  return Math.max(nums);
}
console.log(nums);*/

function greaterNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(greaterNum(5, 10));

//Exercise #2
//Write a function named helloWorld that:
// takes 1 argument, a language code ("es", "de", "en")
// returns "Hello, World" for the given language, for at least
// 3 languages. It should default to returning English
//Call that function for each of the supported languages and log the
// resultto make sure it works

function helloWorld(lang) {
  switch (lang) {
    case "en":
      return "Hello World!";
      break;
    case "es":
      return "Hola mundo!";
      break;
    case "de":
      return "Hallo Welt!";
      break;
    default:
      return `Sorry I don't speak ${lang}.`;
      break;
  }
}
console.log(helloWorld("en"));
console.log(helloWorld("fr"));
console.log(helloWorld("es"));
console.log(helloWorld("de"));

//Exercise #3
//Write a function named assignGrade that:
//takes 1 argument, a number score
//returns a grade for the score, either "A", "B", "C", "D", or "F"
//Call that function for a few different scores and log the result
//to make sure it works
/*function assignGrade(score) {
  if (score >= 95) {
    return "A";
  } else if (score > 85 && score <= 90) {
    return "B";
  } else if (score > 70 && score <= 75) {
    return "C";
  } else if (score > 64 && score <= 67) {
    return "D";
  } else {
    return "F";
  }
}
console.log(assignGrade(87));
console.log(assignGrade(95));
console.log(assignGrade(73));
console.log(assignGrade(61));*/

function assignGrade(score) {
  switch (true) {
    case score >= 95:
      return "A";
      break;
    case score > 85 && score <= 90:
      return "B";
      break;
    case score > 70 && score <= 75:
      return "C";
      break;
    case score > 64 && score <= 67:
      return "D";
      break;
    default:
      return "F";
      break;
  }
}
console.log(assignGrade(87));
console.log(assignGrade(95));
console.log(assignGrade(73));
console.log(assignGrade(61));

//Exercise #4
//Write a function named pluralize that:
//takes 2 arguments, a noun and a number
//returns the number and pluralized form, like "5 cats" or "1 dog"
//call that function for a few different scores
//and log the result to make sure it works
//Bonus: Make it handle a few collective nouns like "sheep" and "geese"

function pluralize(noun, num) {
  if (num != 1 && noun != "sheep" && noun != "geese") {
    return `${num} ${noun}s`;
    //num + " " + noun + "s";
  } else {
    return `${num} ${noun}`;
    // numb + " " + noun;
  }
}
console.log(pluralize("elephant", 0));
console.log(pluralize("cat", 5));
console.log(pluralize("dog", 1));
console.log(pluralize("geese", 6));
