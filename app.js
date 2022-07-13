let container = document.getElementById("container");
let button = document.getElementById("button");
let reset = document.getElementById("reset");




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
            button.style.display = "none"
 } })         
    } 


reset.addEventListener("click", function () {
    let cell = document.getElementsByClassName("grid")
    container.innerHTML = ""
    button.innerHTML = "NUMBER OF SQUARES"
    console.log("reset clicked");
    button.style.display = "inline"
    
})


container.addEventListener("mouseover", function(e) {
    if(e.target !== container){
        e.target.style.backgroundColor = "white";
        e.target.style.border = "1px solid black"
    }
})

















grid()
squares()
