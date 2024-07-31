let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const timeDisplay = document.getElementById('time-display');
const startPauseButton = document.getElementById('start-pause-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

function updateDisplay(time) {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    timeDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startPause() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        startPauseButton.textContent = 'Start';
    } else {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay(elapsedTime);
        }, 1000);
        isRunning = true;
        startPauseButton.textContent = 'Pause';
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        setTimeout(() => {
            elapsedTime = 0;
            updateDisplay(elapsedTime);
            startPauseButton.textContent = 'Start';
        },1000)
    } else {
        elapsedTime = 0;
        updateDisplay(elapsedTime);
            startPauseButton.textContent = 'Start';
    }
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay(elapsedTime);
    startPauseButton.textContent = 'Start';
}

startPauseButton.addEventListener('click', startPause);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
