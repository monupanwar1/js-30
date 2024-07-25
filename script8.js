// 😊Modern JavaScript Features
// template literals
// const details ={
//     name:"kunal",
//     age:20,
//     CurrentYear:2024,
// }
// const message =`my name is ${details.name} and i am ${details.age} old`;
// console.log(message);

// multiline string creation help of the templates literals
// const aboutInfo =`i am kunal panwar
//                     i am a frontend developer`

// console.log(aboutInfo);

// destructuring in js
// const book ={
//     name:"the moon",
//     author:"kunalPanwar",
//     year:2024,

// }
// const {name,author}=book;
// console.log(`title of the book is ${name},author of the book ${author}`);

// Activity 3: Spread and Rest Operators

// const oldArray =[1,2,3,4,5,6];
// const newArray =[...oldArray,7,8,9];
// console.log(newArray)
// console.log(oldArray)

// Use the rest operator in a function to accept an arbitrary
// number of arguments, sum them, and return the result.

// const sum =(...num)=>{
//     console.log(num.reduce((acc,currentValue)=>acc+currentValue))

// }
// sum(1,2,3,4,5,6,7,8,9,0);

// Use enhanced object literals to create an object with
//  methods and properties, and log the object to the console.

// const book = {
//   name: "Moon knight",
//   author: "kunal",
//   bookinfo(){
//     console.log(`
//         hello name of the book is ${this.name} and author is the ${this.author} 
//         `)
//   }
// };
// console.log(book);
// book.bookinfo();

// Create an object with computed
//  property names based on variables and log the object to
//   the console.


// const name="kunalpanwar";
// const age =20;

// const obj ={
    // [name]:age
    // [key]:value
// }
// console.log(obj);


// const multiplex =(multiplier,...nums)=>{
//     console.log(nums.map((nums)=>nums*multiplier));
// }
// multiplex(2,2,3,4,5)



// const x = 10;
// const y = 20;

// const mathOperations={
//     x,y,
//     add(){
//         return this.x +this.y

//     },
//     mul(){
//         return this.x *this.y

//     }
    
// }
// console.log(mathOperations.add())
// console.log(mathOperations.mul())
