const timerText = function () {
    const timer = document.getElementById("timer");
  timer.textContent -= 1;

  if (timer.textContent <= 0) {
    clearInterval(intervalId);
    alert("Вы победили в конкурсе!");
  }
}

const intervalId = setInterval(timerText, 1000);