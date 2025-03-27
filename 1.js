// "day 1 js "
// proptypal inheritence means one object is inherit from other  
// object is a constructor function itself is used to create objects literal syntax() constructor behind the scene

// let obj ={
//     name:"kunal",
//     age:30,
// };
// console.log(obj.age , obj.name)
// console.log(obj.toString());
 
// obj = "i m kunal panwar";
// console.log(obj);


//creating a new object from the root 

// let obj1 =new Object({
//     name:"john",
//     age:30,

// })
// console.log(obj1)



//constructor 

// function Person(name,age ){
//     this.name =name;
//     this.age =age;
// }

// let john = new Person("kunal" ,"30");
// console.log(john);




// object with protype
// let personProto ={
//     greet(){
//         console.log("hello");
//     },
// }


// let john = Object.create(personProto);
// john.greet();




// let personProto ={
//     greet(){
//         console.log("hello");
//     },
// }

// let john = Object.create(personProto);
// console.log(Object.getPrototypeOf(john)===personProto);
// console.log(john.greet());



// const newProto ={
//     bye(){
//         console.log("bye");
//     }

// }
// Object.setPrototypeOf(john,newProto);
// console.log(Object.getPrototypeOf(john)===newProto);
// console.log(john.bye());
// console.log(john.greet());



// function Person(name ,age){
//     this.name=name;
//     this.age=age;

// }

// Person.prototype.greet = function(){
//     console.log("hello" ,this.name);

// }

// const john = new Person("john",30)
// const jake = new Person("jake",50)



// john.greet();
// jake.greet();


// console.log(Object.getPrototypeOf(john)===Person.prototype)
// console.log(Object.getPrototypeOf(jake)===Person.prototype)






//  for loop 
// for(let i =0;i<5;i++){
//     console.log(i);
// }


//while loop


// const person ={
//     name:"kunal",
//     age:"30",
//     city:"bhiwani"
// };

// const person1=["john","jake","kunal"]


// for(const key in person){
//     console.log(key,person[key]);
// }

// for(const key1 of person1){
//     console.log(key1)
// }


// const people =[
//     {name:"kunal", age:"30", city:"bhiwani"},
//     {name:"jack", age:"40", city:"bhiwani-1"},
//     {name:"john", age:"50", city:"bhiwani-3"},
    
// ]

// for(const person of people){
//     console.log(person.name,person.age,person.city)
// }


// destructuring the

// for(const {name,age,city} of people){
//     console.log(name,age,city)
// }






// looping over a string 

// const name = "john";
// for(const char of name){
//     console.log(char)
// }





// const person = {
//     name:"kunal",
//     age:"30",
//     city:"NEw-york"
// }



// for(const value of Object.values(person)){
//     console.log(value)
// }
// for(const key of Object.keys(person)){
//     console.log(key)
// }
// for(const [key,value] of Object.entries(person)){
//     console.log(key,value)
// }




// const value = 1;

// if (value) {
//   console.log("Truthy value");
// } else {
//   console.log("Falsy value");
// }

// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false
// console.log(Boolean(1)); // true

// const True = true;
// const False = !True;


// console.log(!0); // true
// console.log(!1); // false
// console.log(!!0); // false
// console.log(!!1); // true




//promise 

// let promise = new Promise((resolve, reject) => {
//   if(){
//     resolve(sucess);
//   }else{
//     reject(Error("Failure"));
//   }

// });

// promise.then((value)=>console.log(value), (err)=>console.log(err) ;//one way
// promise.then((value)=>console.log(value)).catch(err)=>console.log(err) //second way


// promise.then((value)=>{
//   console.log(value);
//   return value+1;
// })
// .then((value)=>{
//   console.log(value);
//   return value+1;
// })
// .then((value)=>{
//   console.log(value);
//   return value+1;
// })
// .then((value)=>{
//   console.log(value);
//   return value+1;
// })




const promiseOne = new Promise((resolve,reject)=>{
  console.log("promiseOne");
  resolve(1);
})
const promiseTwo = new Promise((resolve,reject)=>{
  console.log("promiseTwo");
  resolve(2);
})

promiseTwo.then((value)=>{
  console.log(value)
 
})
.then((value)=>{
  console.log(value);
  return value+1;
})

promiseOne.then((value)=>{
  console.log(value);
  return value+1;
})





















































 