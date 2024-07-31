// understanding closure
// task1
// Write a function that returns another function, where the inner function accesses a variable from the outer function’s scope. Call the inner function and log the result.
// function outerfunction(){
//   let outerVar ="i am outer function";
//   return function(){
//     console.log(outerVar)
//   }
// }
// const inner =outerfunction();
// console.log(inner);
// inner();


// Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

// function createCounter(){
//   let count =0;
//   return {
//     increment(){
//       count++
//     },
//     getcount(){
//       return count;
//     }
//   } 

// }
// const counter =createCounter();
// console.log(counter);
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.getcount());

// Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

// function createUniqueId(){
//   let lastId=0;

//   return function(){
//     lastId++
//     return lastId;

//   }
// }

// const generatedId =createUniqueId();
// console.log(generatedId())
// console.log(generatedId())


// Create a closure that captures a user’s name and returns a function that greets the user by name.

// let functions=[];
// for(let i =0;i<10;i++){
//   functions.push(
//     (function(index){
//       console.log(index)
//     })(i)
//   );
// }
// functions.forEach((func) => func());



// Task 6:** Use closures to create a simple module for managing a collection of items. Implement methods to `add`, `remove`, and `list` items.


// const itemsmanager =(function(){
//     let items =[];

//     return{
//         addItems(item){
//             items.push(item);
//         },
//         removeItems(item){
//             items.filter((i)=>!i!==item);
//         },
//         listItems(){
//             return items;
//         }
//     }
// })();

// console.log(itemsmanager);
// console.log(itemsmanager.listItems()); // []
// itemsmanager.addItems("Apple");
// itemsmanager.addItems("Banana");
// itemsmanager.addItems("Mango");
// console.log(itemsmanager.listItems()); // [ 'Apple', 'Banana', 'Mango' ]
// itemsmanager.removeItems("Apple");
// console.log(itemsmanager.listItems())




// task 7
// const button =document.getElementById("button");
//  const h1 = document.getElementById("count");
// let count =0;




// button.addEventListener("click", ()=>{
//     count++;
//     h1.textContent=`you clicked ${count}`;
 
   

    

// })



// function currying
// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;

//         }



//     }
// }
// console.log(add(1)(3)(4));



// 10:** Create a curried version of a function that multiplies two numbers.

function multiply(a){
    return function(b){
        return a*b


    }
}


console.log(multiply(10)(2))

