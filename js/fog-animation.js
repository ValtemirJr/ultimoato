window.addEventListener("scroll", function () {
    let text = document.getElementById("text");
    let value = window.scrollY;
    text.style.fontSize = value * 1 + "px";
});