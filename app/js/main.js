var button = document.getElementById("nav_mobile_button");
var nav = document.getElementById("nav");

button.addEventListener( "click", function() {
    if (nav.style.display == "flex") {
        nav.style.display = "none"
    } else {
        nav.style.display = "flex"
    }
})