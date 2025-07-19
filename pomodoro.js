const timerEl = document.querySelector(".timer");
const startBtn = document.querySelector(".btn--start");
const stopBtn = document.querySelector(".btn--stop");
const resetBtn = document.querySelector(".btn--reset");

let timerInterval = null;

//varijabla mi treba currentTime
//iniciram ga sa 25000.
//predstavlja 25 minuta
//treba mi jos varijabla const timeToDeduct.
//iniciram ga sa 1000, predstavlja jednu sekundu koja treba da se makne sa tajmera
//na dugme start, pokrecem setInterval koji krece od trenutne vrednosti currentTime,tj pocinje tako sto oduzima od trenutne vrednosti currentTime-a
//dugme stop, cisti interval i podesi ga na nulu
