const gifs = [
  {
    file: "https://cdn.discordapp.com/attachments/428327863608147970/1094794239512150147/wondering.gif",
    audio: "sounds/wondering.mp3"
  },
  {
    file: "images/fancya3by3.gif",
    audio: "sounds/fancy-a-3-by-3.mp3"
  },
  {
    file: "https://cdn.discordapp.com/attachments/428327863608147970/1094713195152805939/Locrian-Oompa.gif",
    audio: "sounds/Locrian-Oompa.mp3"
  }
];
let currentIndex = 0;
let audio;

const gifElement = document.getElementById("gif");
gifElement.src = gifs[currentIndex].file;

document.getElementById("left-arrow").addEventListener("click", () => {
  if (audio && !audio.paused) {
    audio.pause();
    gifElement.classList.remove("playing");
  }
  currentIndex = (currentIndex - 1 + gifs.length) % gifs.length;
  gifElement.src = gifs[currentIndex].file;
});

document.getElementById("right-arrow").addEventListener("click", () => {
  if (audio && !audio.paused) {
    audio.pause();
    gifElement.classList.remove("playing");
  }
  currentIndex = (currentIndex + 1) % gifs.length;
  gifElement.src = gifs[currentIndex].file;
});

gifElement.addEventListener("click", () => {
  if (audio && !audio.paused) {
    audio.pause();
    gifElement.classList.remove("playing");
  } else {
    audio = new Audio(gifs[currentIndex].audio);
    audio.loop = true;
    audio.play();
    gifElement.classList.add("playing");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    if (audio && !audio.paused) {
      audio.pause();
      gifElement.classList.remove("playing");
    }
    currentIndex = (currentIndex - 1 + gifs.length) % gifs.length;
    gifElement.src = gifs[currentIndex].file;
  } else if (event.key === "ArrowRight") {
    if (audio && !audio.paused) {
      audio.pause();
      gifElement.classList.remove("playing");
    }
    currentIndex = (currentIndex + 1) % gifs.length;
    gifElement.src = gifs[currentIndex].file;
  }
});
