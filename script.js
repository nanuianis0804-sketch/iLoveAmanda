const moveButton = document.getElementById("move-random");

function moveRandomEl() {
    const maxX = window.innerWidth - moveButton.offsetWidth - 20;
    const maxY = window.innerHeight - moveButton.offsetHeight - 20;

    moveButton.style.position = "fixed";
    moveButton.style.left = Math.random() * maxX + "px";
    moveButton.style.top = Math.random() * maxY + "px";
}

moveButton.addEventListener("mouseenter", function (e) {
    e.preventDefault();
    moveRandomEl();
});

moveButton.addEventListener("click", function (e) {
    e.preventDefault();
    moveRandomEl();
});
