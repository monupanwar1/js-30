// recusrion in js
// *Task 1:** Write a recursive function to calculate the _factorial of a number_. Log the result for a few test cases.

// function fac(n){

//     if(n ===0){
//         return 1;
//     }

//     let recusrionAns =n*fac(n-1);
//     return recusrionAns;
// }

// console.log(fac(0));



// task2 

// function fibo(n){
//     if(n<=1){
//         return n ;

//     }

//     let a =fibo(n-1);
//     let b =fibo(n-2);
//     let c =a+b;

//     return c;
// }

// console.log(fibo(5));


// write a recursive function to find the _sum of all elements in an array_. Log the result for a few test cases.


// function sumArray(arr) {
//   // Base Case
//   if (arr.length === 0) {
//     return 0;
//   }

//   // Recursive Relation
//   let recursionAns = arr[0] + sumArray(arr.slice(1));
//   return recursionAns;
// }

// console.log(sumArray([1, 2, 3, 4, 5])); // 15
// console.log(sumArray([10, 20, 30])); // 60


// task 4:** Write a recursive function to find the _maximum element in an array_. Log the result for a few test cases.



// function maxArray(arr){
//     if(arr.length===1){
//         return arr[0];
//     }

//     let finalAns  = Math.max(arr[0],maxArray(arr.slice(1)));
//     return finalAns;
// }
// console.log(maxArray([10, 20, 30, 15]))




// String Manipulation with Recursion




function reverseString(str){
    if(str=== ""){
        return "";

    }


    let finalAns=reverseString(str.slice(1))+str[0];
    return finalAns;
}
console.log(reverseString("hello"));