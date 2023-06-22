// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. We made a variable called 'name' then assigned it to the value of "Dane".
// Name is then checked to see if its value is exactly equal to 'Mary', via the useage of '==='.
// since the value of name is not 'Mary' it does not console.log "Hi, Mary!"
// The else statement prompts it to instead console.log "How do you do?" since the value of name is not the same as "Mary".
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. We declare 'secret' as a variable with no value and 'code' with a value of 123.
// An if statement checks to see if 'code' equals 123, which it does.
// When it does, it assigns a new value to 'secret' which is 'super'.
// It also assigns a new value to code, that being the value of code (123) multiplied by two.
// another if statement checks if the new value of code is greater than 250, if this is true, the value of 'secret' will be changed to 'duper'
// However, 246 is not greater than 250, so the value of secret stays as 'super'
// When the value of secret is console logged, it will output 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. We declare the variables 'isStudent', 'age' and 'zip' and assign a value to them.
// An if statement checks to see if 'isStudent' equals true (which it is) but it also checks if 'zip' is greater than 80000, which it is not.
// Even though the first part is true, the second is not. So it will not console log "you're a student on the west coast". 
// Since it is not true, it will move to the else statement. It checks if 'isStudent' equals false and if 'age' is less than 30. This is of course not true. so it moves to the next else statement.
//The next else statment checks if 'isStudent' equals true, which it does!
//so it will then execute the console log "Welcome to Prime!"
// The last else statement will execute if the previous statment was false.


//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

// FIX - 'colorOne' is set to 'red' but the instructions ask for it to be 'blue'
// 'colorTwo' is set to 'blue' when it should be 'red'.
// Only 'colorOne' will be set to 'purple' in this line.
// We would have to also add "colorTwo = 'purple';" to make them both purple.


//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

// FIX - The statement uses "||" which is the operator for "or" which is not what the instructions say.
// "||" should be replaced with "&&". Like so
//if (temp > 39 && time >= 4) 


//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

// FIX - Since minAge has less than OR EQUAL TO, following this logic you could
// be denied acess for being 21
// The 'no entry' should be swapped with 'enter' as if the statment is false-
// it will move to the else statement which is 'enter'.