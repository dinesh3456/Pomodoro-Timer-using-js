const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const sessionRadio = document.getElementById("session");
const breakRadio = document.getElementById("break");

let workDuration = 25 * 60;
let breakDuration = 5 * 60;
let isSession = true;
let isRunning = false;
let timerInterval;

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
sessionRadio.addEventListener("click", setSession);
breakRadio.addEventListener("click", setBreak);

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timerInterval = setInterval(updateTimer, 1000);
    startButton.textContent = "Pause";
  } else {
    clearInterval(timerInterval);
    isRunning = false;
    startButton.textContent = "Resume";
  }
}

function updateTimer() {
  if (isRunning) {
    if (isSession) {
      workDuration--;
    } else {
      breakDuration--;
    }
    let minutes = Math.floor((isSession ? workDuration : breakDuration) / 60);
    let seconds = (isSession ? workDuration : breakDuration) % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    if (minutes === 0 && seconds === 0) {
      switchSession();
    }

    minutesDisplay.textContent = minutes;
    secondsDisplay.textContent = seconds;
  }
}

function switchSession() {
  isSession = !isSession;
  if (isSession) {
    minutesDisplay.textContent = "25";
    secondsDisplay.textContent = "00";
  } else {
    minutesDisplay.textContent = "05";
    secondsDisplay.textContent = "00";
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  startButton.textContent = "Start";

  if (isSession) {
    minutesDisplay.textContent = "25";
    secondsDisplay.textContent = "00";
  } else {
    minutesDisplay.textContent = "05";
    secondsDisplay.textContent = "00";
  }

  workDuration = 25 * 60;
  breakDuration = 5 * 60;
}

function setSession() {
  if (!isRunning) {
    isSession = true;
    minutesDisplay.textContent = "25";
    secondsDisplay.textContent = "00";
  }
}

function setBreak() {
  if (!isRunning) {
    isSession = false;
    minutesDisplay.textContent = "05";
    secondsDisplay.textContent = "00";
  }
}
