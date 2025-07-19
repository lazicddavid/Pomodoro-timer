const timerEl = document.querySelector(".timer");
const startBtn = document.querySelector(".btn--start");
const stopBtn = document.querySelector(".btn--stop");
const resetBtn = document.querySelector(".btn--reset");

let time = 1000;
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
  console.log(interval);
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;

  updateTimer();
});

updateTimer();

//varijabla mi treba currentTime
//iniciram ga sa 25000.
//predstavlja 25 minuta
//treba mi jos varijabla const timeToDeduct.
//iniciram ga sa 1000, predstavlja jednu sekundu koja treba da se makne sa tajmera
//na dugme start, pokrecem setInterval koji krece od trenutne vrednosti currentTime,tj pocinje tako sto oduzima od trenutne vrednosti currentTime-a
//dugme stop, cisti interval i podesi ga na nulu
