//Exercise #1
//Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number. 
// Call that function 2 times with different number pairs
// and log the output to make sure it works 
//(e.g. "The greater number of 5 and 10 is 10")

function greaterNum(a, b) {
  if (a > b) {
    console.log(`the greater number of ${a} and ${b} is ${a}`);
  } else if (b > a) {
    console.log(`the greater number of ${b} and ${a} is ${b}`);
  }
  
}
greaterNum();



//Exercise #2
//Write a function named helloWorld that: 
// takes 1 argument, a language code ("es", "de", "en")
// returns "Hello, World" for the given language, for at least 
// 3 languages. It should default to returning English
//Call that function for each of the supported languages and log the 
// resultto make sure it works

function helloWorld(lang) {
  if (lang === `es`) {
    console.log(`Hola Mundo`);
  }else if (lang === `de`) {
    console.log(`Hello Wereld`);
  }else if (lang === `en`) {
    console.log(`Hello World`);
  }
}
helloWorld(lang);






//Exercise #3
//Write a function named assignGrade that:
//takes 1 argument, a number score
//returns a grade for the score, either "A", "B", "C", "D", or "F"
//Call that function for a few different scores and log the result 
//to make sure it works

function assignGrade(num) {
  let grades = Math.floor(Math.random() * 100);
/* mathf.floor(math.random) selects random interger*/
console.log(grades);
/*print out grades with log */
switch (grades) {
    case grades > 95 :
        console.log("A+");
        break;
    case grades > 90 :
        console.log("A");
        break;
    case grades > 84 :
        console.log("B+");
        break;
    case grades > 76 :
        console.log("C+");
        break;
    case grades > 70 :
        console.log("C");
        break;
    case grades > 67 :
        console.log("D+");
        break;
    case grades > 64 :
        console.log("D");
        break;
    case grades > 60 :
    default:
        console.log("F");
}


assignGrade(90)








//Exercise #4
//Write a function named pluralize that:
//takes 2 arguments, a noun and a number
//returns the number and pluralized form, like "5 cats" or "1 dog"
//call that function for a few different scores
//and log the result to make sure it works
//Bonus: Make it handle a few collective nouns like "sheep" and "geese"

function pluralize(noun, number) {
  if (number === 1) {
      console.log(number, noun);
  } else if (noun === "goose") {
      console.log(`${number} geese`);
  } else if (noun === "sheep") {
    console.log(`${number} sheep`);
  } else if (number > 2) {
      console.log(`${number} ${noun}s`);
  }
}
pluralize();