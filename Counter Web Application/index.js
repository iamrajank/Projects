const content = document.querySelector("#title")
const btnIncrement = document.querySelector("#increment")
const btnReset = document.querySelector("#reset")
const btnDecrement = document.querySelector("#decrement")

let value = 0;


function Increment(){
    // let value = btnIncreament.innerText;
    value = value + 1;
    content.innerText = value;
}
btnIncrement.addEventListener("click",Increment);


function Decrement(){
    // let value = btnIncreament.innerText;
    value = value - 1;
    content.innerText = value;
}
btnDecrement.addEventListener("click",Decrement);


function Reset(){
    // let value = btnIncreament.innerText;
    value = 0 ;
    content.innerText = value;
}
btnReset.addEventListener("click",Reset);
