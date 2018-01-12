/* OBJECTIVE 1
addEventListener("DOMContentLoaded", button);
function button() {
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Click Me!");
    button.appendChild(buttonText);
    document.body.appendChild(button);

    addEventListener("click", click);
    function click() {
        alert("This is a very nice message.")
    }
}
*/

/* OBJECTIVE 2
let button = document.getElementById("button");
button.addEventListener("click", click);
function click() {
    let message = document.getElementById("text-box").value;
    alert(message);
}
*/

let div = document.getElementById("div");
div.addEventListener("mouseenter", function() {
    div.style.backgroundColor = "red";
})
div.addEventListener("mouseleave", function() {
    div.style.backgroundColor = "black";
})