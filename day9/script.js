// const h1 =document.getElementById('h1') //first way; task1
// const h1 =document.querySelector('#h1') //second way;
// h1.textContent="hey dude!"

// task 2
// const h1 =document.querySelector('h1');
// h1.style.backgroundColor="blue";

// task 3 creation of new div and appending
// const div =document.createElement("div");
// div.textContent="this is new div";
// document.body.appendChild(div);

// task 4 selection of all the ul and add some new ul to the existing ul;

// const ul =document.querySelector("ul");
// const li =document.createElement('li');
// li.textContent="singh";
// ul.appendChild(li)

// task5 removing Element from the dom
// const task =document.getElementById("task5")
// task.style.backgroundColor="red";
// task.parentNode.removeChild(task);

// task6 remove the last child
// const task =document.getElementById("task5");
// task.parentNode.removeChild(task.lastChild);

// task7 add or remove css class
// const task8 =document.getElementById("task8");
// task8.style.backgroundColor="blue";
// task8.classList.add("newClass")
// task8.classList.remove("oldClass")

// const taskButton = document.querySelector("#task9Button");
// taskButton.style.backgroundColor = "blue";

// const text= document.querySelector("#task9Text");
// text.style.backgroundColor="red"

// const task9 =document.querySelector("#task9")
//  task9.style.backgroundColor="blue"


// taskButton.addEventListener("click",function(){
//     text.textContent="hello";
//     text.style.backgroundColor="yellow"


//    const h1 =document.createElement("h1");
//    h1.textContent="hello";
//    h1.style.border="1px solid black"
//    h1.style.marginTop='10px';
//    task9.appendChild(h1)
   

// })

// note fatarrow-function not supporeted the this keyword;
const task10 =document.getElementById("task10")
task10.style.backgroundColor="red";

task10.addEventListener("mouseover",function(){
    this.style.backgroundColor="yellow"
})