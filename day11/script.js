// //  task one promisses reject and resolve

// const resolve =new Promise((resolve)=>{
//   setTimeout(()=>{
//     resolve("promise resolve")
//   },2000)
// })
// resolve.then((message)=>{
//   console.log("resolve promise")
// })

// // task two promisses reject

// const reject= new Promise((_,reject)=>{
//   setTimeout(()=>{
//     reject("promise reject")
//   },2000)
// });
// reject.catch((err)=>{
//   console.log(err)
// })

// chaining promise

// const fetch =(data,delay)=>{
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//       resolve(data);
//     },delay)
//   })
// }
// fetch("fetching from the server one",1000)
// .then((Message)=>{
//   console.log(Message);
//   return fetch("fetching from the server two",2000)
// })
// .then((Message)=>{
//   console.log(Message)
// })

// using the async await
// const asyncResolve = async () => {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Resolved value from async function");
//     }, 2000);
//   });

//   const result = await promise;
//   console.log(result); // Resolved value from async function
// };

// asyncResolve();


// const asyncReject =async()=>{
//   const promise =new Promise((_,reject)=>{
//     setTimeout(()=>{
//       reject("rejected async function")
//     },2000)
//   })
//   try {
//     const result =await promise;
//     console.log(result);
//   } catch(err){
//     console.log(err)
//   }
// }
// asyncReject()

// Fetching Data from an API

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>res.json())
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log(err)
// })
  // fetch data using the async await

// const fetchdata =async()=>{
//   try{
//     const response =await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data =await response.json();
//     console.log(data);
//   }catch(err){
//     console.log(err)
//   }
// }
// fetchdata();

// concurret promise ;


const promise1 =new Promise((resolve)=>{
  setTimeout(()=>{
    resolve("promise resolve")
  },2000)
});
const promise2 =new Promise((resolve)=>{
  setTimeout(()=>{
    resolve("promise resolve")
  },2000)
});
const promise3 =new Promise((resolve)=>{
  setTimeout(()=>{
    resolve("promise resolve")
  },2000)
});


Promise.all([promise1,promise2,promise3])
.then((value)=>{
  console.log("all promise resolve" ,value)
})
Promise.race([promise1,promise2,promise3])  
.then((value)=>{
  console.log("first promise resolve" ,value)
})
