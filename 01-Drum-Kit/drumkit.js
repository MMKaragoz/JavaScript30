function playSound(e) {
   
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audio) return;

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    console.log(e.target.classList);
    e.target.classList.remove("playing");
}

const keys = Array.from(document.querySelectorAll(".key"));

for (let key of keys){
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event
    key.addEventListener("transitionend", removeTransition);
}

// https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
this.addEventListener("keydown", playSound);