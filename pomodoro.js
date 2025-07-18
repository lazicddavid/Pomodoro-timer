const timerEl = document.querySelector(".timer");
const startBtn = document.querySelector(".btn--start");
const stopBtn = document.querySelector(".btn--stop");

let time = 1500;
let interval = null;
function updateTimer() {
  let min = Math.floor(time / 60);
  let sec = time % 60;
  if (sec < 10) {
    sec = "0" + sec;
  }
  timerEl.textContent = `${min}:${sec}`;
}

startBtn.addEventListener("click", () => {
  if (interval) return;
  interval = setInterval(() => {
    time--;
    updateTimer();
    if (time <= 0) {
      clearInterval(interval);
      interval = null;
      alert("Vreme je isteklo");
    }
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  time = 1500;
  updateTimer();
});

updateTimer();
