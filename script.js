window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  const keyDown = document.querySelector(`div[data-key="${e.keyCode}"]`);
  keyDown.classList.add("playing");
});

const keys = document.querySelectorAll(".key");
for (let i = 0; i < keys.length; i++) {
  let key = keys[i];
  key.addEventListener("transitionend", (e) => {
    if (e.propertyName === "transform") {
      key.classList.remove("playing");
    }
  });
}
