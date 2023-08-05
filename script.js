const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const sessionRadio = document.getElementById("session");
const breakRadio = document.getElementById("break");

let workDuration = 25;
let breakDuration = 5;
let isSession = true;
let isRunning = false;
let timerInterval;

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);

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
  if (minutes === "00" && seconds === "00") {
    switchSession(); // Call the function to switch between work and break sessions
    startButton.textContent = "Start"; // Change button text back to 'Start'
    clearInterval(timerInterval); // Clear the interval after a session completes
    isRunning = false; // Set the timer's running state to false
  }
}

function updateTimer() {
  let minutes, seconds;
  if (isRunning) {
    if (isSession) {
      minutes = Math.floor(workDuration / 60);
      seconds = workDuration % 60;
    } else {
      minutes = Math.floor(breakDuration / 60);
      seconds = breakDuration % 60;
    }
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + minutes : minutes;

    if (minutes === "00" && seconds === "00") {
      switchSession();
    }

    minutesDisplay.textContent = minutes;
    secondsDisplay.textContent = seconds;
  }
}

function switchSession() {
  isSession = !isSession;
  if (isSession) {
    minutesDisplay.textContent = ("0" + workDuration).slice(-2);
  } else {
    minutesDisplay.textContent = ("0" + breakDuration).slice(-2);
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  startButton.textContent = "Start";

  if (isSession) {
    minutesDisplay.textContent = ("0" + workDuration).slice(-2);
  } else {
    minutesDisplay.textContent = ("0" + breakDuration).slice(-2);
  }
  secondsDisplay.textContent = "00";
}
