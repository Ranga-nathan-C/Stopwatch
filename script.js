let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let lapCounter = 1;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStop');
const lapBtn = document.getElementById('lap');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const laps = document.getElementById('laps');

startStopBtn.addEventListener('click', startStop);
lapBtn.addEventListener('click', lap);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

function startStop() {
    if (!running) {
        startTime = new Date(display).getTime() || new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
        startStopBtn.textContent = "Stop";
        startStopBtn.classList.remove("btn-success");
        startStopBtn.classList.add("btn-danger");
    } else {
        clearInterval(tInterval);
        running = false;
        startStopBtn.textContent = "Start";
        startStopBtn.classList.remove("btn-danger");
        startStopBtn.classList.add("btn-success");
    }
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    console.log(difference)
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    console.log(hours,minutes,seconds)

    display.textContent = hours + ':' + minutes + ':' + seconds;
}

function lap() {
    if (running) {
        const lapTime = document.createElement('div');
        lapTime.textContent = `Lap ${lapCounter}: ${display.textContent}`;
        laps.appendChild(lapTime);
        lapCounter++;
    }
}

function stop() {
    clearInterval(tInterval);
    running = false;
    startStopBtn.textContent = "Start";
    startStopBtn.classList.remove("btn-success");
    startStopBtn.classList.add("btn-danger");
}

function reset() {
    clearInterval(tInterval);
    running = false;
    startStopBtn.textContent = "Start";
    startStopBtn.classList.remove("btn-success");
    startStopBtn.classList.add("btn-danger");
    display.textContent = "00:00:00";
    laps.innerHTML = "";
    lapCounter = 1;
}
