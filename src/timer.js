let timeRemaining = 0;
let timeout;

export function startTimer() {
  timeRemaining = 4;
  // On reset we want to cancel the timeout related to the previous timer//
  clearTimeout(timeout);
  tick();
}

function tick() {
  updateTimeDisplay();

  // We are done if the timer has finished
  if (timeRemaining === 0) {
    // if timeRemaining = 0 then need to update the score and say whose go it is next//
    
    return;
  }

  timeRemaining -= 1;
  // Set timeout will call the function after the specified number of milliseconds
  // This is not 100% precise and technically the timer is not accurate
  timeout = setTimeout(tick, 1000);
}

function updateTimeDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const paddedSeconds = seconds.toString().padStart(2, "0");

  const timerEl = document.getElementById("timer");
  timerEl.innerHTML = minutes + ":" + paddedSeconds
}