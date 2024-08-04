// Basic Regular Expressions

//* task1 write a regular expression and match  all the  occurance of the word;
// const str ="javascript is a programming language, i love javascript";
// const regex =/javascript/g;

// const matches =str.match(regex);
// console.log(matches);



// **Task 2:** Write a regular expression to match all digits in a string. Log the matches.


// const str ="There are the 123 apple and 5667 orange"

// const regex=/\d+/g;
// const matches =str.match(regex);
// console.log(matches);


// Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

// const str ="I M Here MY Name Is Kunal Panwar"
// const regex =/\b[A-Z][a-z]*\b/g;
// const matches =str.match(regex);
// console.log(matches);



// *Task 4:** Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
// const str ="1234 mangoes and the 45orange 89Dragonfruit";
// const regex =/\d+/g;
// const matches =str.match(regex);
// console.log(matches)

// **Task 5:** Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.


const str = "JavaScript is great. JavaScript is fun.";
const regex = /^\w+/;
const matches = str.match(regex);
console.log(matches); // Output: ["JavaScript"]




