//Exercise #1
//Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs
// and log the output to make sure it works
//(e.g. "The greater number of 5 and 10 is 10")
console.log('Part A');
let greater;
function greaterNum(x, y) {
	console.log(`The greater number between ${x} and ${y} is `);
	if (x > y) {
		return x;
	} else {
		return y;
	}
}
console.log(greaterNum(32, 12));
console.log(greaterNum(2, 120));

//Using an arrow function and ternary operator
// greaterNum2 = (x, y) => {
// 	x > y
// 		? console.log(`The greater number between ${x} and ${y} is ${x}`)
// 		: console.log(`The greater number between ${x} and ${y} is ${y}`);
// };
// greaterNum2(1, 3);
// greaterNum2(123432, 321);

//Exercise #2
//Write a function named helloWorld that:
// takes 1 argument, a language code ("es", "de", "en")
// returns "Hello, World" for the given language, for at least
// 3 languages. It should default to returning English
//Call that function for each of the supported languages and log the
// resultto make sure it works
console.log('\nPart B');
function helloWorld(str) {
	switch (str) {
		case 'es':
			return 'Hola Mundo';
			// console.log('Hola Mundo');
			break;
		case 'de':
			return 'Hallo Welt';
			// console.log('Hallo Welt');
			break;
		case 'en':
			return 'Hello World';
			// console.log('Hello World');
			break;
		default:
			return 'Hello World';
			// console.log('Hello World');
			break;
	}
}
let testLanguage = [ helloWorld('esfsdfdsfc'), helloWorld('es'), helloWorld('de'), helloWorld('en') ];
for (let i = 0; i < testLanguage.length; i++) {
	console.log(testLanguage[i]);
}

//Exercise #3
//Write a function named assignGrade that:
//takes 1 argument, a number score
//returns a grade for the score, either "A", "B", "C", "D", or "F"
//Call that function for a few different scores and log the result
//to make sure it works
console.log('\nPart C');
function assignGrade(numberScore) {
	switch (true) {
		case numberScore >= 90:
			return 'A';
		case numberScore >= 80:
			return 'B';
			break;
		case numberScore >= 70:
			return 'C';
			break;
		case numberScore >= 60:
			return 'D';
			break;
		case numberScore <= 59:
			return 'F';
			break;
	}
}
let test = [ assignGrade(99), assignGrade(85), assignGrade(77), assignGrade(67), assignGrade(32) ];
for (let i = 0; i < test.length; i++) {
	console.log(`You've scored a letter grade of ${test[i]}`);
}

//Exercise #4
//Write a function named pluralize that:
//takes 2 arguments, a noun and a number
//returns the number and pluralized form, like "5 cats" or "1 dog"
//call that function for a few different scores
//and log the result to make sure it works
//Bonus: Make it handle a few collective nouns like "sheep" and "geese"
console.log('\nPart D');
function pluralize(noun, num) {
	if (num === 1) {
		return `There is ${num} ${noun}`;
	} else if (noun === 'sheep' || noun === 'geese' || noun === 'Sheep' || noun === 'Geese') {
		return `There is ${num} ${noun}`;
	} else {
		return `There is ${num} ${noun}s`;
	}
}
console.log(pluralize('sheep', 1));
console.log(pluralize('Geese', 10));
console.log(pluralize('Saber-Tooth Moose Lion Cub', 1));
console.log(pluralize('Turtleduck', 32));
