//quiz
const submitButton = document.getElementById("quiz-submit");
const resetButton = document.getElementById("quiz-reset");
const result = document.getElementById("quiz-result");

if (submitButton) {

  submitButton.addEventListener("click", function () {
    const questions = document.querySelectorAll(".quiz-question");
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      const answer = question.dataset.answer;
      const chosen = question.querySelector("input:checked");
      const feedback = question.querySelector(".quiz-feedback");

      if (chosen === null) {
        feedback.textContent = "你還沒作答喔！";
        feedback.className = "quiz-feedback wrong";
      } else if (chosen.value === answer) {
        score = score + 1;
        feedback.textContent = "答對了！";
        feedback.className = "quiz-feedback correct";
      } else {
        feedback.textContent = "答錯了，再看看規則教學頁吧！";
        feedback.className = "quiz-feedback wrong";
      }
    }

    result.textContent = "你答對了 " + score + " / " + questions.length + " 題";
  });

  resetButton.addEventListener("click", function () {
    const inputs = document.querySelectorAll(".quiz-question input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].checked = false;
    }

    const feedbacks = document.querySelectorAll(".quiz-feedback");
    for (let i = 0; i < feedbacks.length; i++) {
      feedbacks[i].textContent = "";
      feedbacks[i].className = "quiz-feedback";
    }

    result.textContent = "";
  });
}

//countdown to next practice day
const countdownDisplay = document.getElementById("countdown-display");

function updateCountdown() {
  const now = new Date();

  if (now.getDay() === 1 && now.getHours() >= 19 && now.getHours() < 21) {
    countdownDisplay.textContent = "現在正在練習中，快來球場！";
    return;
  }

  const nextPractice = new Date();
  const daysToMonday = (1 - now.getDay() + 7) % 7;
  nextPractice.setDate(now.getDate() + daysToMonday);
  nextPractice.setHours(19, 0, 0, 0);

  if (nextPractice < now) {
    nextPractice.setDate(nextPractice.getDate() + 7);
  }

  const diff = nextPractice - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  countdownDisplay.textContent = days + " 天 " + hours + " 小時 " + minutes + " 分 " + seconds + " 秒";
}

if (countdownDisplay) {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}
