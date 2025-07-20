let currentTime = 25 * 60 * 1000;
let timeToDeduct = 1000;
let timerInterval = null;

const display = document.querySelector(".timer");
const startBtn = document.querySelector(".btn--start");
const stopBtn = document.querySelector(".btn--stop");
const resetBtn = document.querySelector(".btn--reset");

function updateDisplay() {
  let totalSecond = currentTime / 1000;
  let minutes = Math.floor(totalSecond / 60);
  let seconds = totalSecond % 60;

  if (seconds < 10) {
    display.textContent = minutes + ":0" + seconds;
  } else {
    display.textContent = minutes + ":" + seconds;
  }
}

startBtn.addEventListener("click", function () {
  if (timerInterval !== null) return;

  timerInterval = setInterval(function () {
    if (currentTime > 0) {
      currentTime -= timeToDeduct;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      console.log("Tajmer je istekao.");
    }
  }, timeToDeduct);
});

stopBtn.addEventListener("click", function () {
  clearInterval(timerInterval);
  timerInterval = null;
});

resetBtn.addEventListener("click", function () {
  clearInterval(timerInterval);
  timerInterval = null;
  currentTime = 25 * 60 * 1000;
  updateDisplay();
});

//varijabla mi treba currentTime
//iniciram ga sa 25000.
//predstavlja 25 minuta
//treba mi jos varijabla const timeToDeduct.
//iniciram ga sa 1000, predstavlja jednu sekundu koja treba da se makne sa tajmera
//na dugme start, pokrecem setInterval koji krece od trenutne vrednosti currentTime,tj pocinje tako sto oduzima od trenutne vrednosti currentTime-a
//dugme stop, cisti interval i podesi ga na nulu.
resetBtn;

currentTime;
