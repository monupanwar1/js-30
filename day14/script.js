// class in js
// task 1
// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greet(){
//         console.log(`hello i m ${this.name} and my age is ${this.age}`);

//     }
// }
// const person1 =new person("kunal" ,25);
// person1.greet();


// task 2 Add a method to the `Person` class that updates the `age` 

// 

// taks 3  Class Inheritance (extend new property);

// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age =age;
//     }
//     greet(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
//     }
    
// }
// class students extends person{
//     constructor(name,age,studentsId){
//         super(name,age);
//         this.studentsId=studentsId;
//     }
//     getStudentId(){
//         console.log(`the student id is ${this.studentsId}`);
//     }
// }
// const student1 = new students("kunal",22,"S134");
// student1.getStudentId();


// Task 4:Override the greeting method in the `Student` class to include the student ID in the message. Log the overridden greeting message.

// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;

//     }
//     greet(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
//     }

// }
// class students extends person{
//     constructor(name ,age ,studentsId){
//         super(name,age);
//         this.studentsId=studentsId;
//     }
//     greet(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old students id is ${this.studentsId}`)


//     }
// }
// const student1 =new students("kunal",25);
// student1.greet();
// const student2 =new students("kunal",25,"S1233");
// student2.greet();

//  task 5 Add a static method to the `Person` class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
// note static is used for the accesing the property of the class without the instance or making objects


// class person{
//     constructor(name,age) {
//         this.name=name;
//         this.age=age;
//     }

//  static greet(){
//         console.log('hello i am kunal panwar')
    
//     }
// }
// person.greet();


// Add a static property to the `Student` class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     // Static method: we can call it without creating the instance of person class
//     static genericGreet() {
//       return "Hello, welcome to our community!";
//     }
  
//     greet() {
//       return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
//   }
  
//   class student extends Person{
//     static count =0;

//     constructor(name,age,studentId){
//         super(name,age);
//         this.studentId=studentId;
//         student.count++;

//     }
//     // Override the greet method of person class
//   greet() {
//     return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//   }

//   }
//   const student1 = new student("RAKESH", 22, "S12345");
// const student2 = new student("SAMAR", 23, "S12346");
// console.log(`studnets count is ${student.count}`);


// Getters and Setters




// class student{
//     constructor(Fname,Lname,age){
//         this.Fname=Fname;  
//         this.Lname=Lname;  
//         this.age=age;
//     }
//     get studentDetails(){
//         return`${this.Fname} and ${this.Lname}`;
//     }
//     set studentDetails(name){
//         const [Fname,Lname]=name.split(" ");
//         this.Fname=Fname;  
//         this.Lname=Lname; 


//     }

// }
// const student1 =new student("kunal" ,22);
// console.log(student1.studentDetails);
// student1.studentDetails="kunal panwar"
// console.log(student1.studentDetails)



// create an instance of the `Account` class and test the deposit and withdraw methods, logging the balance after each operation.

class Account{
    _balance;
    constructor(intialBalance){
        this._balance=intialBalance;

    }
    deposite(ammount){
        this._balance+=ammount;
        // this.logBalance();
        console.log(` total balance after deposite ${this._balance}`)
    }
    withdraw(amount) {
        if (amount <= this._balance) {
          this._balance -= amount;
          console.log(`withdraw balnce is ${amount}`)
        } else {
          console.log("Insufficient balance");
        }
        
        console.log(`Current balance: ${this._balance}`);
    }
    
    
    
}


const Account1=new Account(1000);
Account1.deposite(1000);
Account1.withdraw(150);
    