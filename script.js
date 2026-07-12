const moveButton = document.getElementById("move-random");

function moveRandomEl() {
    const maxX = window.innerWidth - moveButton.offsetWidth;
    const maxY = window.innerHeight - moveButton.offsetHeight;

    moveButton.style.position = "fixed";
    moveButton.style.left = Math.random() * maxX + "px";
    moveButton.style.top = Math.random() * maxY + "px";
}

document.addEventListener("mousemove", (e) => {
    const rect = moveButton.getBoundingClientRect();

    const distance = 120; // pixels

    if (
        e.clientX > rect.left - distance &&
        e.clientX < rect.right + distance &&
        e.clientY > rect.top - distance &&
        e.clientY < rect.bottom + distance
    ) {
        moveRandomEl();
    }
});
