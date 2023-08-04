const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const sessionRadio = document.getElementById('session');
const breakRadio = document.getElementById('break');

let workDuration = 25;
let breakDutation = 5;
let isSession = true;
let isRunning = false;
let timerInterval;

startButton.addEventListener('click',startTimer);
resetButton.addEventListener('click',resetTimer);
