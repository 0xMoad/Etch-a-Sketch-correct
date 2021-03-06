let container = document.getElementById("container");
let button = document.getElementById("button");
let reset = document.getElementById("reset");
let color  = document.getElementById("color");
let bgColor = "red"
let eraser = document.getElementById("eraser");

//Color changer
color.addEventListener("change", (e) => (bgColor = e.target.value));



const grid = () => {
    button.addEventListener("click",() =>{
        // Getting userinput for the gridArea
        let inputValue = prompt("How many squares would you want")
        container.style.gridTemplateColumns = `repeat(${inputValue}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${inputValue}, 1fr)`;
        button.classList.add("button");  
         // Creating the grid
        for(let i = 0; i < inputValue * inputValue; i++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            container.appendChild(cell); 
             button.disabled = true;
             button.innerHTML = "RESET TO SIZE AGAIN"
            
 } })         
    } 

 // reset by emptying the container
reset.addEventListener("click", function () {
    let cell = document.getElementsByClassName("grid")
    container.innerHTML = ""
    button.innerHTML = "NUMBER OF SQUARES"
    console.log("reset clicked");
    button.disabled = false;
    
})
// Execute 'start' function on mousedown anywhere in document.
document.addEventListener("mousedown", start);

document.addEventListener("keydown", erase)
document.addEventListener("keyup", stopErase)

// Execute 'stop' function on mouseup anywhere in document.
document.addEventListener("mouseup", stop);

// Get nodelist of elements to apply styles to
// Apply an event listener to each one of them
function start(event) {
    let divs = document.querySelectorAll(".cell")
    divs.forEach((div) => {
        div.addEventListener("mousemove", function(e){
            this.style.backgroundColor = `${bgColor}`;;
            this.style.border = "1px solid gray"
            
        })
    })
}

// Get nodelist of elements to remove event listener from
// clone the nodes as cloning does not copy the listener
function stop() {
    let divs = document.querySelectorAll(".cell")
    divs.forEach((div) => {
        div.replaceWith(div.cloneNode(true));
    })
}


 function erase(event) {
     let divs = document.querySelectorAll(".cell")
     divs.forEach((div) => {
         div.addEventListener("mousemove", function(e){
             this.style.backgroundColor = "white";
             this.style.border = "1px solid gray"
            
         })
     })
 }

 function stopErase() {
    let divs = document.querySelectorAll(".cell")
    divs.forEach((div) => {
        div.replaceWith(div.cloneNode(true));
    })
}



















grid()
squares()

