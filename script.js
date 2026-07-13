function moveRandomEl(elm) {
  elm.style.position = "fixed";

  const maxX = window.innerWidth - elm.offsetWidth;
  const maxY = window.innerHeight - elm.offsetHeight;

  elm.style.left = Math.floor(Math.random() * maxX) + "px";
  elm.style.top = Math.floor(Math.random() * maxY) + "px";
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
  function move(e) {
    e.preventDefault();
    moveRandomEl(moveRandom);
  }

  moveRandom.addEventListener("pointerenter", move);
  moveRandom.addEventListener("pointerdown", move);
}
