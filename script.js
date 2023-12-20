const cheer = document.getElementById("cheer");
const count = document.getElementById("count");
const bubble1 = document.getElementById("bubble1");
const text1 = document.getElementById("text1");
const message = document.getElementById("message");
const duration = 2000;
let counter = 0;

function cheerMe() {
    counter++;
    count.textContent = counter;
    bubble1.classList.add("show");
    bubble1.style.left = cheer.offsetLeft + "px";
    bubble1.style.top = cheer.offsetTop + "px";
    setTimeout(function() {
        bubble1.classList.add("move");
        bubble1.style.left = count.offsetLeft + "px";
        bubble1.style.top = count.offsetTop + "px";
    }, 100);
    setTimeout(function() {
        bubble1.classList.remove("show");
        bubble1.classList.remove("move");
    }, duration);
    message.style.display = "block";
}

document.body.addEventListener("click", function(event) {
    if (event.target.id !== "cheer" && event.target.id !== "message") {
        message.style.display = "none";
    }
});
