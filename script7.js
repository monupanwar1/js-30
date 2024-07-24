// ✅Day 7 objects;

// object creation and accesing;
// let book={
//     title:"The Moon",
//     author:"kunalPanwar",
//     year:"2024"
// }
//  console.log(book);
//  console.log(book.author);
//  console.log(book.title);


// object with method or function

// let book={
//     title:"The Moon",
//     author:"kunalPanwar",
//     year:"2024"
// };
// book.info =()=>{
//     return`${book.title} written by ${book.author}`;
// } 
// console.log(book.info());


// adding a method for updating the year of the book

// let book={
//     title:"The Moon",
//     author:"kunalPanwar",
//     year:"2024"
// };
// book.updateYear =(newyear)=>{
//     this.year =newyear;
// }
// book.updateYear(2030);
// console.log(book);


//  nested Object
// let studentData={
//     name:"kunal",
//     marks:[
//         {sem1:100,name:"hyper os" },
//         {sem2:200,name:"hyper os" },
//         {sem3:400,name:"hyper os" }
//     ]
// }       
// console.log(studentData.name);
// studentData.marks.forEach((e)=>{
//     console.log(e.name);
// })


// this keyword
// let book = {
//     title: "pandacode",
//     author: "kunalPanwar",
//     year: 2024,
//   };
// book.getInfo=()=>{
//     return`${this.title} written by ${this.author}`
// } ;
// console.log(book.getInfo());
// ans is undefined due to Array function

// let book = {
//     title: "pandacode",
//     author: "kunalPanwar",
//     year: 2024,
//   };
// book.getInfo=function(){
//     return`${this.title} written by ${this.author}`
// } ;
// console.log(book.getInfo());
// same ans as you will thinking



// // object iteration
// let book = {
//     title: "The moon",
//    author: "kunalPanwar",
//     year: 2024,
//   };
  
//   book.getInfo = function () {
//     return `${this.title} by ${this.author}`;
//   };
  
//   book.updateYear = function (newYear) {
//     this.year = newYear;
//   };
//   book.updateYear(2020);

//   for(let key in book){
//     if(book.bookhasOwnProperty(key)){
//         console.log(`${key}:${book[key]}`)
//     }
//   }
  

// let Book = {
//     title: "The moon",
//     author: "kunalpanwar",
//     year: 2024,
//   };
  
  
// for(let key in Book){
//     console.log(`${key}:${Book[key]} `);
// }


