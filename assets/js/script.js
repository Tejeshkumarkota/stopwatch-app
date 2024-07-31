let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const timeDisplay = document.getElementById('time-display');
const startPauseButton = document.getElementById('start-pause-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
const icon = document.getElementById('icon');

// Update Display functionality
function updateDisplay(time) {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    timeDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
// Start or pause functionality
function startPause() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        icon.classList.remove('bi-pause-circle');
        icon.classList.add('bi-play-circle');
    } else {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay(elapsedTime);
        }, 1000);
        isRunning = true;
        icon.classList.remove('bi-play-circle');
        icon.classList.add('bi-pause-circle');
    }
}
// Stop functionality
function stop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        setTimeout(() => {
            elapsedTime = 0;
            updateDisplay(elapsedTime);
            icon.classList.remove('bi-pause-circle');
            icon.classList.add('bi-play-circle');
        },0)
    } else {
        elapsedTime = 0;
        updateDisplay(elapsedTime);
        icon.classList.remove('bi-pause-circle');
        icon.classList.add('bi-play-circle');
    }
}
// Reset functionality
function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay(elapsedTime);
    icon.classList.remove('bi-pause-circle');
    icon.classList.add('bi-play-circle');
}

startPauseButton.addEventListener('click', startPause);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
