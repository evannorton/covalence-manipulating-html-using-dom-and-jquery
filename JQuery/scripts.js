/* OBJECTIVE 1
let $button = $("<button>Click Me!</button>");
$button.appendTo("body");
$button.click(function () {
    alert("Hey nice person.")
});
*/

/* OBJECTIVE 2
let $button = $("#button");
$button.click( function () {
    let message = $("#text-box").val();
    alert(message);
});
*/

let $div = $("#div");
$div.hover(function() {
    div.style.backgroundColor = "red";
}, function() {
    div.style.backgroundColor = "black";
})