// Day 3
// ✅todos=>


// check a number zero postive or negative

// function checkNumber(num) {
//   if ( num> 0) {
//        console.log("this is positive number ");
//   } else if ( num< 0) {
//        console.log("this is negative number ");
//   } else {
//        console.log("this is zero  ");
//   }
// }

// checkNumber(10);
// checkNumber(0);
// checkNumber(-10);

// check vote or not
// function checkEligibility(age){
//     if(age>=18){
//         console.log("you can vote")
//     }
//     else{
//         console.log("you can't vote");
//     }


// }
// checkEligibility(10);
// checkEligibility(20);


// nested if else
// function findLarge(a,b,c){
//     if(a>b){
//         if(a>c){
//             console.log(`largest is ${a}`)
//         }
//         else{
//             console.log(`largest is ${c}`)
//         }
//     }
//     else{
//         if(b>=c){
//             console.log(`largest is ${b}`)
//         }
//         else{
//             console.log(`largest is ${c}`)
//         }
//     }

// }


// findLarge(3,7,10);
// findLarge(12,7,10);

// switch case

// function getDays(daysNumber){
//     switch(daysNumber){
//         case 1:
//             console.log("sunday");
//             break;
//         case 2:
//             console.log("Monday");
//             break;
//         case 3:
//             console.log("Tuesday");
//             break;
//         case 4:
//             console.log("Wednesday");
//             break;
//         case 5:
//             console.log("Thursday");
//             break;
//         case 6:
//             console.log("friday");
//             break;
//         case 1:
//             console.log("saturday");
//             break;
//         default:
//             console.log("Invalid number");
//             break;
        
            
        
//     }
// }
// getDays(3);
// getDays(10);







// function getGrade(score){
//     let grade;
//     switch(true){
//         case score>=90:
//            grade ="A";
//             break;
//         case score>=80:
//            grade ="B";
//             break;
//         case score>=70:
//            grade ="C";
//             break;
//         case score>=60:
//            grade ="D";
//             break;
            
//          default:
//             grade="F";   
//     }
//     console.log(`the grade is ${grade}`);
// }

// getGrade(56);
// getGrade(60);
// getGrade(6);


// ternary operation to check a number is even or odd

// function checkEvenOdd(num){
//     const result =num%2==0?"The number is even":"The number is odd";
//     console.log(result);
// }
// checkEvenOdd(3);
// checkEvenOdd(2);



// combining condition

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       console.log(`${year} is a leap year.`);
//     } else {
//       console.log(`${year} is not a leap year.`);
//     }
//   }
  
//   isLeapYear(2020); // Output: 2020 is a leap year.
//   isLeapYear(1900); // Output: 1900 is not a leap year.
//   isLeapYear(2000); // 









