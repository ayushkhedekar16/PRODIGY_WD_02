let timer;
let isRunning = false;
let startTime;
let lapTimes = [];

function startStop() {
    if (!isRunning) {
        isRunning = true;
        document.getElementById("startStop").textContent = "Stop";
        startTime = new Date().getTime();
        timer = setInterval(updateTime, 10);
    } else {
        isRunning = false;
        document.getElementById("startStop").textContent = "Start";
        clearInterval(timer);
    }
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("startStop").textContent = "Start";
    document.getElementById("display").textContent = "00:00:00";
    lapTimes = [];
    document.getElementById("laps").innerHTML = "";
}

function updateTime() {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;
    let minutes = Math.floor(elapsedTime / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    document.getElementById("display").textContent = formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatTime(milliseconds);
}

function formatTime(time) {
    return (time < 10 ? "0" : "") + time;
}

function lap() {
    if (isRunning) {
        let lapTime = document.getElementById("display").textContent;
        lapTimes.push(lapTime);
        let lapList = document.getElementById("laps");
        let li = document.createElement("li");
        li.textContent = "Lap " + lapTimes.length + ": " + lapTime;
        lapList.appendChild(li);
    }
}