const moveButton = document.getElementById("move-random");

function moveRandomEl(elm) {
    const maxX = window.innerWidth - elm.offsetWidth;
    const maxY = window.innerHeight - elm.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    elm.style.position = "fixed";
    elm.style.left = `${x}px`;
    elm.style.top = `${y}px`;
}

// Move every time the cursor gets on it
moveButton.addEventListener("mouseenter", (e) => {
    e.preventDefault();
    moveRandomEl(moveButton);
});

// Also move on touch devices
moveButton.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveRandomEl(moveButton);
});
});
