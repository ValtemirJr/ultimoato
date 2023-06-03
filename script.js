let text = document.getElementById("text");
window.addEventListener("scroll", function () {
    let value = window.scrollY;
    text.style.fontSize = value * 1 + "px";
});