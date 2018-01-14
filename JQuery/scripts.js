/* OBJECTIVE 1
let $button = $("<button>Click Me!</button>");
$button.appendTo("body");
$button.click(function () {
    alert("Hey nice person.")
});
*/

let $button = $("#button");
$button.click( function () {
    let message = $("#text-box").val();
    alert(message);
});