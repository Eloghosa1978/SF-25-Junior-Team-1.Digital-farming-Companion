const quizQuestions = [
      {
        question: "Who is the smartest?",
        options: ['Bigsis',  'Taiye', 'kenny', 'Bolu'],
        answer: 'Bigsis',
        image: "dragon 3.jpg"
      },
      {
        question: "Which tool is used to cut grass?",
        options: ["Cutlass", "Spoon", "Hoe", "Pencil"],
        answer: "Cutlass",
        image: "dragon 1.png"
      },
      {
        question: "Which one is a farm animal?",
        options: ["Lion", "Goat", "Snake", "Tiger"],
        answer: "Goat",
        image: "dragon 2.jpg"
      }
    ];

    let currentQuestion = 0;
    let score = 0;

    function loadQuestion() {
      const q = quizQuestions[currentQuestion];
      document.getElementById("question").textContent = (currentQuestion + 1) + ". " + q.question;
      document.getElementById("questionImage").src = q.image;

      const optionsDiv = document.getElementById("options");
      optionsDiv.innerHTML = "";

      q.options.forEach((opt) => {
        optionsDiv.innerHTML += `
          <label>
            <input type="radio" name="option" value="${opt}"> ${opt}
          </label>
        `;
      });

      document.getElementById("result").textContent = "";
    }

    function submitAnswer() {
      const selected = document.querySelector('input[name="option"]:checked');
      if (!selected) {
        alert("Please choose an answer.");
        return;
      }

      const answer = selected.value;
      const correct = quizQuestions[currentQuestion].answer;

      if (answer === correct) {
        document.getElementById("result").textContent = "✅ Correct!";
        score++;
      } else {
        document.getElementById("result").textContent = "❌ Wrong! Answer: " + correct;
      }
    }

    function nextQuestion() {
      currentQuestion++;
      if (currentQuestion < quizQuestions.length) {
        loadQuestion();
      } else {
        showScore();
      }
    }

    function showScore() {
      document.getElementById("quizBox").style.display = "none";
      document.getElementById("scoreBox").style.display = "block";
      document.getElementById("scoreBox").innerHTML = `
        🎉 Quiz Completed!<br><br>
        Your Score: ${score} out of ${quizQuestions.length} Good job! Want to play again?<br><br>
        <button onclick="restartQuiz()">Play Again</button>
      `;
    }

    function restartQuiz() {
      currentQuestion = 0;
      score = 0;
      document.getElementById("scoreBox").style.display = "none";
      document.getElementById("quizBox").style.display = "block";
      loadQuestion();
    }

    // Load the first question on page load
    loadQuestion();

