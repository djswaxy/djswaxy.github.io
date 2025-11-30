const Duckbutton = document.getElementById("secretbutton");
const input = document.getElementById("secretinput");


Duckbutton.addEventListener("click", (e) => {
    if(input.value === "andedammen") {
        window.location.href = "./dammen.html";
    }
    else {
        alert("FEJL!");
    }
})
const Countbutton = document.getElementById("counterbtn");
const countervalue = document.getElementById("CounterValue");
let counter = 0;
Countbutton.addEventListener("click", (e) => {
    counter++;
    countervalue.innerText = "" + counter;
})