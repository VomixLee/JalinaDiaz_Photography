// Controllable Grid View

<button onclick="four()">4</button>
var elements = document.getElementsByClassName("column");

var i;

function four() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.flex = "25%";
    }
}