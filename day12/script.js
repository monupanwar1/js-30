// // Welcome to Day 12 of JavaScript Basics! Today, we'll explore error handling in JavaScript.
// // We'll cover basic error handling with try-catch, using the finally block,
// // creating custom error objects, handling errors in promises, and gracefully handling errors when using
// // the `fetch` API. By the end of these activities, you'll have a strong understanding of how to 
// // handle errors in your JavaScript code effectively.

// // Task 1
// // Write a function that will throw an error
// const myError = () => {
//   throw new Error("this is a new error");
// };

// try {
//   myError();
// } catch (err) {
//   console.log("Error:", err.message); // Catches and logs the error message
// }

// // Task 2
// // Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error
// const divide = (a, b) => {
//   if (b === 0) {
//     throw new Error("division by zero is not allowed");
//   }
//   return a / b;
// };

// try {
//   console.log(divide(10, 2)); // Should log 5
//   console.log(divide(10, 0)); // Should throw an error
// } catch (err) {
//   console.log("Caught an error:", err.message); // Catches and logs the error message
// }

// // Task 3
// // Finally block
// const testError = () => {
//   try {
//     console.log("I'm in the try block"); // Always executed
//   } catch (err) {
//     console.log("I'm in the catch block", err.message); // Executed if there is an error
//   } finally {
//     console.log("I'm in the finally block"); // Always executed
//   }
// };

// testError(); // Runs the testError function

// // Task 4
// // Custom error
// class CustomError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "CustomError"; // Sets the name of the error
//   }
// }

// function throwError() {
//   throw new CustomError("this is a custom error 😊");
// }

// try {
//   throwError();
// } catch (err) {
//   console.log(`${err.name}: ${err.message}`); // Catches and logs the custom error message
// }

// // Task 5
// // Write a function that validates user input
// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError"; // Sets the name of the error
//   }
// }

// function validateInput(input) {
//   if (!input) {
//     throw new ValidationError("input cannot be blank❌");
//   }
//   return true;
// }

// try {
//   validateInput(""); // Should throw a validation error
// } catch (err) {
//   console.log(`${err.name}: ${err.message}`); // Catches and logs the validation error message
// }

// // Error Handling in Promises
// function randomPromise() {
//   return new Promise((resolve, reject) => {
//     const random = Math.random();
//     if (random > 0.5) {
//       resolve("promise resolved");
//     } else {
//       reject(new Error("promise rejected")); // Rejects with an error
//     }
//   });
// }

// randomPromise()
//   .then((message) => console.log(message)) // Logs the resolved message
//   .catch((err) => console.log("Error:", err.message)); // Catches and logs the rejection error message

// // Error handling with the async function
// const promiseHandle = async () => {
//   try {
//     const message = await randomPromise();
//     console.log(message); // Logs the resolved message
//   } catch (error) {
//     console.log("Error:", error.message); // Catches and logs the rejection error message
//   }
// };

// promiseHandle(); // Runs the promiseHandle function

// // Use the `fetch` API to request data from an invalid URL and handle the error using `.catch()`. Log an appropriate error message to the console
// fetch("https://jsonplaceholder.typicode.com/invalid-url")
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("Network response was not ok"); // Throws an error for a bad response
//     }
//     return res.json();
//   })
//   .then((data) => console.log(data)) // Logs the fetched data
//   .catch((err) => console.log("Fetch error:", err.message)); // Catches and logs the fetch error message



// task 6se the `fetch` API to request data from an invalid URL within an async function and 


const fetchData =async()=>{

  try{
    const res =await fetch("https://jsonplaceholder.typicode.com/post");
    const data = await res.json();
    console.log(data);

  }catch(err){
    console.log("err in data fetching",err.message);
  }

}

fetchData();
