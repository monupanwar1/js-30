// task1 toogle image block to none;

// const image =document.getElementById("image");
// const button =document.getElementById("button");

// button.addEventListener("click",function(){
//  image.style.backgroundColor=image.style.backgroundColor==="white"? "blue":"white"; 
//  image.style.display=image.style.display==="none"?"block":"none";

// task2,3 add event to cahnges that changes its background color.


// const box =document.getElementById("box");
// box.addEventListener("mouseover",function(){
//     this.style.backgroundColor="yellow";

// })
// box.addEventListener("mouseout",function(){
//     this.style.backgroundColor="skyblue";

// })


// task 4
// const input =document.getElementById("input"); 
// input.addEventListener("keydown" ,function(e){
//     console.log("key pressed" ,e.key);

// })

// task5
// const form =document.getElementById("form");

// form.addEventListener("submit",function(e){
//     e.preventDefault();
//      console.log("Form data:", new FormData(this));
//      console.log(e.target.value)
   
// })

// const dropDown =document.getElementById("dropdown")
// const selectedValue =document.getElementById('selectedValue')
// dropDown.addEventListener("change",function(){
//     selectedValue.textContent=`selected value :${this.value}`

// })


// const list =document.getElementById("list")
// list.addEventListener("click",function(e){
//     if(e.target.tagName==='LI'){
//         console.log('clickd me',e.target.textcontent)
//     }
// })


const parentElement =document.getElementById("parentElement");
const addElementBtn =document.getElementById("addElementBtn");

parentElement.addEventListener("click",function(e){
      if(e.target.classList.contains("childElement")){
        console.log("clicked",event.target.textContent)
      }

})

let count = 0;
document
  .getElementById("addElementBtn")
  .addEventListener("click", function () {
    const newElement = document.createElement("div");
    newElement.className = "childElement";
    newElement.textContent = `New Child Element ${count++}`;
    document.getElementById("parentElement").appendChild(newElement);
  })

















