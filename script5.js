// ✅ function Day 5

// sqaure function

// function sqaure(num){
//     let answer= num*num;
//     console.log(answer)
// }
// sqaure(4);
// sqaure(10);

// find maximum of two number
// const findMax= function(num1,num2){
//     let max =num1>num2? num1:num2;
//     console.log(`The maximum numbert is ${max}`)

// }
// findMax(10,30);

// function for concatination of the two String

// const addString =function(str1,str2){
//     let ans =str1+str2;
//     console.log(ans)

// }
// addString("kunal",'panwar');


// arrow function 

// const sum =(num1,num2)=>{
//     let ans =num1+num2;
//     console.log(ans);
// }
// sum(10,20);

// check it contain Character or not

// const containChar =(str,char)=>{
//     let ans =str.includes(char);
//     console.log(ans);
// }
// containChar("hello", "o");


// function with default parameters value
// function mul(num1,num2=10){
//     let ans =num1*num2
//     console.log(ans);
// }
// mul(10);


// Task 8: Write a function that takes a person’s name and age and 
// returns a greeting message. Provide a default value for the age.

// const greetFnc=(name,age=20)=>{
 
//     console.log(`Hello ${name} ! you are ${age} year old`);

// }
// greetFnc("kunal",30);


// higher ordrer function
// function repeatFnc(fn,times){
//     for(let i =0;i<times;i++){
//         fn();
//     }
// }
// repeatFnc(()=>console.log("hello"),10)



// function myfunction(fn1,fn2,value){
//     return fn2(fn1(value));
// }

// const addFive=(x)=>x+5;
// const squre =(x)=>x*x;

// console.log(myfunction(addFive,squre,3));


// even or odd function
// const oddEven=(number)=>{
//     const check =(number%2==0)?"even":"odd";
//     console.log(check);
// }
// oddEven(13);
// oddEven(0);


// check squre of the Number
// const sqaure =(number)=>{
//     const answer =(num)=>num*num;
//     return answer(number)

// }
// console.log(sqaure(10));

// const square =(num)=>{
//     const answer =num*num;
//     console.log(answer)
// }
// square(12);
// Higher-Order Function Script: Write a script that includes 
// a higher-order function to apply a given function multiple times.


const higherOrder =(fn,times,value)=>{
    let result =value;
    for(let i =0;i<times;i++){
        result=fn(result);
    }
    return result

}
const add=(num)=>num+10;
console.log(higherOrder(add,3,10));










































