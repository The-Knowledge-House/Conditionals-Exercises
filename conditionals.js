//Exercise #1
//Write a function named greaterNum that:
//takes 2 arguments, both numbers.
//returns whichever number is the greater (higher) number. 
//Call that function 2 times with different number pairs
//and log the output to make sure it works 
//(e.g. "The greater number of 5 and 10 is 10")

function greaterNum() {
  let val1 = 18
  let val2 = 26

  if (val1 > val2) {
    return val1;
  } else {
    return val2;
  }

  console.log(`The greather number of ${val1} and ${val2} is ${val2}`);
}





//Exercise #2
//Write a function named helloWorld that: 
//takes 1 argument, a language code ("es", "de", "en")
//returns "Hello, World" for the given language, for at least 
//3 languages. It should default to returning English
//Call that function for each of the supported languages and log the 
//resultto make sure it works

function helloWorld(lang) {

  if (lang == 'es') {
    return 'Hola mundo';
  }
  else if (lang == 'de') {
    return 'Hallo, welt';
  }
  else (lang == 'en'); {
    return 'Hello, world';
  }
}
console.log(helloWorld('es'));
console.log(helloWorld('de'));
console.log(helloWorld('en'));







//Exercise #3
//Write a function named assignGrade that:
//takes 1 argument, a number score
//returns a grade for the score, either "A", "B", "C", "D", or "F"
//Call that function for a few different scores and log the result 
//to make sure it works

function assignGrade() {
  if (score > 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 65) {
    return 'D';
  } else {
    return 'F';
  }
}
console.log('You got a ' + assignGrade(/*add grade number here*/));








//Exercise #4
//Write a function named pluralize that:
//takes 2 arguments, a noun and a number
//returns the number and pluralized form, like "5 cats" or "1 dog"
//call that function for a few different scores
//and log the result to make sure it works
//Bonus: Make it handle a few collective nouns like "sheep" and "geese"

function pluralize() {

  if (number != 1 && noun != 'sheep' && noun != 'geese') {
    return number + ' ' + noun + 's';
  } else {
    return number + ' ' + noun;
  }
}
console.log('I have ' + pluralize('cat', 0));
console.log('I have ' + pluralize('cat', 1));
console.log('I have ' + pluralize('cat', 2));
console.log('I have ' + pluralize('cat', 3));
console.log('I have ' + pluralize('cat', 4));
console.log('I have ' + pluralize('cat', 5));


