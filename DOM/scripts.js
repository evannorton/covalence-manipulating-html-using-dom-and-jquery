addEventListener("DOMContentLoaded", button);
function button() {
    let button = document.createElement("button");
    let buttonText = document.createTextNode("Click Me!");
    button.appendChild(buttonText);
    document.body.appendChild(button);

    addEventListener("click", click);
    function click() {
        console.log("This is a very nice message.")
    }
}