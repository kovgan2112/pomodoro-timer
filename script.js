const buttonStart = document.getElementById("start");
const counterDisplay = document.getElementById("pomodoro-time");

let totalSeconds = 1500;
let intervalId = null;

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function updateDisplay() {
    counterDisplay.textContent = formatTime(totalSeconds);
}

buttonStart.addEventListener("click", function() {
    if (buttonStart.textContent === "start") {
        buttonStart.textContent = "stop";

        intervalId = setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;
                updateDisplay();
            } else {
                clearInterval(intervalId);
                updateDisplay();
                buttonStart.textContent = "start";
            }
        }, 1000);
    } else {
        clearInterval(intervalId);
        buttonStart.textContent = "start";
    }
});
updateDisplay();