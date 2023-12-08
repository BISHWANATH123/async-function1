// let inp = document.getElementById(#inp-1);

let stopwatch;
let isRunning = false;
let seconds = 0;

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    stopwatch = setInterval(updateStopwatch, 1000);
  }
}

function pauseStopwatch() {
  clearInterval(stopwatch);
  isRunning = false;
}

function resetStopwatch() {
  clearInterval(stopwatch);
  isRunning = false;
  seconds = 0;
  updateDisplay();
}

function updateStopwatch() {
  seconds++;
  updateDisplay();
}

function updateDisplay() {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const display = `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
  document.getElementById("display").textContent = display;
}

function pad(value) {
  return value < 10 ? `0${value}` : value;
}