let container = document.getElementById("container");
let button = document.getElementById("button");
let reset = document.getElementById("reset");
let color  = document.getElementById("color");
let backgroundColor = "red"


color.addEventListener("change", (e) => (bgColor = e.target.value));


const grid = () => {
    button.addEventListener("click",() =>{
        let inputValue = prompt("How many squares would you want")
        container.style.gridTemplateColumns = `repeat(${inputValue}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${inputValue}, 1fr)`;
        button.classList.add("button");  
        for(let i = 0; i < inputValue * inputValue; i++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            container.appendChild(cell); 
            
             button.disabled = true;
             button.innerHTML = "RESET TO SIZE AGAIN"
            
 } })         
    } 


reset.addEventListener("click", function () {
    let cell = document.getElementsByClassName("grid")
    container.innerHTML = ""
    button.innerHTML = "NUMBER OF SQUARES"
    console.log("reset clicked");
    button.disabled = false;
    
})


  /* container.addEventListener("mouseover", function(e) {
    
     if(e.target !== container){
          e.target.style.backgroundColor = "white";
          e.target.style.border = "1px solid black"
      }  
  })

 */
// Execute 'start' function on mousedown anywhere in document.
document.addEventListener("mousedown", start);

// Execute 'stop' function on mouseup anywhere in document.
document.addEventListener("mouseup", stop);

// Get nodelist of elements to apply styles to
// Apply an event listener to each one of them
function start(event) {
    let divs = document.querySelectorAll(".cell")
    divs.forEach((div) => {
        div.addEventListener("mousemove", function(e){
            this.style.backgroundColor = `${bgColor}`;;
            this.style.border = "1px solid black"
            console.log("start works")
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















grid()
squares()

