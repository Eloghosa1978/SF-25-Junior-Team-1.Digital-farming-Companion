let score = 0;

function nextQuestion(qNum, event) {
  // Get selected radio value
  event.preventDefault();
  const selected = document.querySelector(`input[name="ques${qNum}"]:checked`);
  if (!selected) {
    alert("Please select an answer.");
    return;
  }

  // Check correct answers
  const correctAnswers = {
    1: "c",
    2: "b",
    3: "c",
    4: "d",
    5: "b",
    6: "a",
  };

  if (selected.value === correctAnswers[qNum]) {
    score++;
  }

  // Hide current question
  document.getElementById(`question${qNum}`).style.display = "none";

  // Show next question or result
  const next = document.getElementById(`question${qNum + 1}`);
  if (next) {
    next.style.display = "block";
  } else {
    if (score >= 4) {
      document.getElementById(
        "result-rate"
      ).innerText = `Very Good Job, You Recieved ${score} stars. `;
    } else if (score >= 2) {
      document.getElementById(
        "result-rate"
      ).innerText = `Good Job. You tried, you have recieved ${score} stars`;
    } else {
      document.getElementById(
        "result-rate"
      ).innerText = `You tried, but you can try harder.  You have recieved ${score} stars`;
    }
    document.getElementById("result").style.display = "block";
    document.getElementById("score").innerText = score;
  }
}
