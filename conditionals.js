//Exercise #1
//Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number. 
// Call that function 2 times with different number pairs
// and log the output to make sure it works 
//(e.g. "The greater number of 5 and 10 is 10")

function greaterNum(num1,num2) {
    if(num1 > num2){
        console.log(`The greater number of ${num1} and ${num2} is ${num1}`);
    } else {
        console.log(`The greater number of ${num2} and ${num1} is ${num2}`);
    }
}

greaterNum(5,10);
greaterNum(100,7);



//Exercise #2
//Write a function named helloWorld that: 
// takes 1 argument, a language code ("es", "de", "en")
// returns "Hello, World" for the given language, for at least 
// 3 languages. It should default to returning English
//Call that function for each of the supported languages and log the 
// resultto make sure it works

function helloWorld(lanCode) {
    switch (lanCode) {
        case 'es':
            console.log("Hola Mundo");
            break;
        
        case 'de':
            console.log("Hallo Welt");
            break;

        case 'en':
                console.log("Hello World");
                break;

        default:
            console.log("Hello World");
    } 
}

helloWorld('es');
helloWorld('de');
helloWorld('en');
helloWorld('');



//Exercise #3
//Write a function named assignGrade that:
//takes 1 argument, a number score
//returns a grade for the score, either "A", "B", "C", "D", or "F"
//Call that function for a few different scores and log the result 
//to make sure it works

function assignGrade(score) {
    switch (true) {
        case (score <= 100 && score >= 90):
            console.log("A");
            break;
        case (score <= 89 && score >= 80):
            console.log("B");
            break;
        case (score <= 79 && score >= 70):
            console.log("C");
            break;
        case (score <= 69 && score >= 60):
            console.log("D");
            break;
        case (score <= 59 && score >= 0):
            console.log("F");
            break;
        default:
            console.log("Invalid score");
    }
}

assignGrade(97);
assignGrade(87);
assignGrade(77);
assignGrade(67);
assignGrade(37);
assignGrade(0);
assignGrade(101);


//Exercise #4
//Write a function named pluralize that:
//takes 2 arguments, a noun and a number
//returns the number and pluralized form, like "5 cats" or "1 dog"
//call that function for a few different scores
//and log the result to make sure it works
//Bonus: Make it handle a few collective nouns like "sheep" and "geese"

function pluralize(noun, number) {
    if (number != 1 && noun != 'sheep' && noun != 'geese') {
        return number + ' ' + noun + 's';
    } else {
        return number + ' ' + noun;
    }
}
console.log('I have ' + pluralize('cat', 0));
console.log('I have ' + pluralize('cat', 1));
console.log('I have ' + pluralize('cat', 2));