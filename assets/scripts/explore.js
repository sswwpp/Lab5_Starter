// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const talkButton = document.querySelector("button");
  const inputText = document.querySelector("textarea");
  const selectVoice = document.querySelector("select");
  const image = document.querySelector("img");
  let voices;

  function listVoices() {
    voices = speechSynthesis.getVoices();

    for (let i = 0; i < voices.length; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.innerHTML = voices[i].name;
      selectVoice.appendChild(option);
    }
  }

  window.speechSynthesis.onvoiceschanged = listVoices;

  talkButton.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(inputText.value);
    utterance.voice = voices[selectVoice.value];
    image.src = "assets/images/smiling-open.png";
    speechSynthesis.speak(utterance);
    utterance.onend = (event) => {
      image.src = "assets/images/smiling.png";
    };
  });
}
