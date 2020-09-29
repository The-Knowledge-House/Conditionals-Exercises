//Exercise #1
//Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number. 
// Call that function 2 times with different number pairs
// and log the output to make sure it works 
//(e.g. "The greater number of 5 and 10 is 10")

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

function helloWorld(spake) {
    if (spake == 'arabic') {
        return 'marhbaba beal3ame';
    } else if (spake == 'spanish') {
        return 'hola monda';
    } else {
        return 'Hello, World';
    }
}







//Exercise #3
//Write a function named assignGrade that:
//takes 1 argument, a number score
//returns a grade for the score, either "A", "B", "C", "D", or "F"
//Call that function for a few different scores and log the result 
//to make sure it works
function assignGrade(grade) {
    if (grade > 90) {
        return 'A';
    } else if (grade > 80) {
        return 'B';
    } else if (grade > 70) {
        return 'C';
    } else if (grade> 65) {
        return 'D';
    } else {
        return 'F';
    }
}








//Exercise #4
//Write a function named pluralize that:
//takes 2 arguments, a noun and a number
//returns the number and pluralized form, like "5 cats" or "1 dog"
//call that function for a few different scores
//and log the result to make sure it works
//Bonus: Make it handle a few collective nouns like "sheep" and "geese"
  

function pluralize(noun, num){
    if (num!=1 && noun!='sheep' && noun!='geese'){
        return num +" " + noun +'s'}
        else{
            return num + ' ' + noun;

        }
    }







