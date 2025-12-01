const Duckbutton = document.getElementById("secretbutton");
const secretinput = document.getElementById("secretinput");


Duckbutton.addEventListener("click", (e) => {
    if(secretinput.value === "andedammen") {
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


let nameset = 0;
let username = "";
function pressedfirstquestion() {
    const chatinput = document.getElementById("chatinput");
    if (nameset === 0) {
        username = chatinput.value;
        chatinput.value = "";
        nameset++;
        document.getElementById("chatinput").placeholder = "type a message now!";

    }
    else {
        addchat(username);
    }
}

function addchat(username) {
    const chatinput = document.getElementById("chatinput");
    const chatmessage = chatinput.value;
    const newP = document.createElement("p");
    chatinput.value = "";

    newP.innerHTML = "<span style='color: blue; font-weight: bold;'>" + username + "</span>" + ": " + chatmessage;

    document.getElementById("chatlog").appendChild(newP);

}
