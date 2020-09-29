//Exercise #1
//Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number. 
// Call that function 2 times with different number pairs
// and log the output to make sure it works 
//(e.g. "The greater number of 5 and 10 is 10")
function greaterNum (arg1, arg2) {
    if(arg1 > arg2){
        return arg1
    } else {
        return arg2
    }
}

// console.log(greaterNum(2, 78), "\n", greaterNum(200, 78))

//Exercise #2
//Write a function named helloWorld that: 
// takes 1 argument, a language code ("es", "de", "en")
// returns "Hello, World" for the given language, for at least 
// 3 languages. It should default to returning English
//Call that function for each of the supported languages and log the 
// resultto make sure it works

function helloWorld(lang) {
    switch (lang) {
        case "es":
            return "Hola mundo";
            break;
    
        case "ita":
            return "Ciao mondo";
            break;
    
        case "fr":
            return "Bonjour le mond";
            break;
    
        case "de":
            return "Hallo Wereld";
            break;
    
        default:
            return "Hello World";
            break;
    }
}

// console.log(helloWorld("de"));


//Exercise #3
//Write a function named assignGrade that:
//takes 1 argument, a number score
//returns a grade for the score, either "A", "B", "C", "D", or "F"
//Call that function for a few different scores and log the result 
//to make sure it works

function assignGrade(score){
    if(score < 58){
        return "F";
    } else if (score >= 58 && score <= 65){
        return "E";
    } else if (score >= 66 && score <= 72){
        return "D";
    } else if (score >= 73 && score <= 85){
        return "C";
    } else if (score >= 86 && score <= 94){
        return "B";
    } else if (score >= 95){
        return "A";
    }
}

// console.log(assignGrade(75));
// console.log(assignGrade(34));
// console.log(assignGrade(97));
// console.log(assignGrade(67));

//Exercise #4
//Write a function named pluralize that:
//takes 2 arguments, a noun and a number
//returns the number and pluralized form, like "5 cats" or "1 dog"
//call that function for a few different scores
//and log the result to make sure it works
//Bonus: Make it handle a few collective nouns like "sheep" and "geese"

// function pluralize (noun, num){
//     if(num > 1) {
//         if(noun[noun.length-1] === 's' || noun === "sheep" || noun === "geese"){
//             return `${num} ${noun}`;
//         }
//         return `${num} ${noun}s`;
//     }
//     if(num === 1 && noun[noun.length-1] === 's'){
//         let singular = noun.slice(0, noun.length-1)
//         return `${num} ${singular}`
//     }
//     return `${num} ${noun}`;   
// }

function pluralize (noun, num){
    if(num > 1) {
        if(noun[noun.length-1] === 's' || noun === "sheep" || noun === "geese"){
            return `${num} ${noun}`;
        }
        return `${num} ${noun}s`;
    }
    if(num === 1 && noun[noun.length-1] === 's'){
        let singular = noun.slice(0, noun.length-1)
        return `${num} ${singular}`
    }
    // return `${num} ${noun}`;   
}

console.log(pluralize("dogs", 2));
console.log(pluralize("dogs", 1));
console.log(pluralize("cat", 2));
console.log(pluralize("geese", 2));
console.log(pluralize("sheep", 1));