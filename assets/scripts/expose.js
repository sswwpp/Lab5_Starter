window.addEventListener("DOMContentLoaded", init);

// initialize
function init() {
  // image
  const image = document.querySelector("img");
  const hornType = document.getElementById("horn-select");

  // sound
  const audio = document.querySelector("audio");
  const volumeImg = document.querySelector('img[alt="Volume level 2"');
  const volumeLvl = document.getElementById("volume");

  // confetti
  const party = document.querySelector("button");
  const jsConfetti = new JSConfetti();

  // horn selection
  hornType.addEventListener("change", (event) => {
    switch (event.target.value) {
      case "air-horn":
        image.src = "assets/images/air-horn.svg";
        audio.src = "assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        image.src = "assets/images/car-horn.svg";
        audio.src = "assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        image.src = "assets/images/party-horn.svg";
        audio.src = "assets/audio/party-horn.mp3";
        break;
      default:
        return;
    }
  });

  // volume slider
  volumeLvl.addEventListener("change", (event) => {
    const eventVolume = event.target.value;
    audio.volume = eventVolume / 100;

    if (eventVolume == 0) {
      volumeImg.src = "assets/icons/volume-level-0.svg";
    } else if (eventVolume < 33) {
      volumeImg.src = "assets/icons/volume-level-1.svg";
    } else if (eventVolume < 67) {
      volumeImg.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImg.src = "assets/icons/volume-level-3.svg";
    }
  });

  // confetti exception
  party.addEventListener("click", () => {
    audio.play();
    const event = hornType.value;
    if (event == "party-horn") jsConfetti.addConfetti();
  });
}
