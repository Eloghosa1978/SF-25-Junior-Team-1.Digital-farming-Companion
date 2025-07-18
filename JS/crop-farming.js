// Generate questions dynamically
window.onload = () => {
  const cropFarmingContainer = document.getElementById(
    "crop-farming-questions"
  );

  // Crop Farming Questions
  cropFarming.questions.forEach((q) => {
    const div = document.createElement("div");
    div.className = "mb-2 lead bg-light shadow-lg p-4 rounded";
    div.style = "border: 1px solid #ccc; font-size: 1.3rem;";
    let optionsHTML = "";

    q.options.forEach((opt, idx) => {
      optionsHTML += `
          <div class="form-check">
            <input class="form-check-input" type="radio" name="${q.id}" id="${q.id}_${idx}" value="${idx}">
            <label class="form-check-label" for="${q.id}_${idx}">${opt}</label>
          </div>
        `;
    });

    div.innerHTML = `
        <p class="fw-bold">${q.text}</p>
        ${optionsHTML}
        <br/>
      `;

    cropFarmingContainer.appendChild(div);
  });

  // Exercises
  const exerciseContainer = document.getElementById("exercise-questions");
  cropFarmingExercise.questions.forEach((q) => {
    const div = document.createElement("div");
    div.className = "mb-4 p-3 border rounded bg-white";
    let optionsHTML = "";

    q.options.forEach((opt, idx) => {
      optionsHTML += `
          <div class="form-check">
            <input class="form-check-input" type="radio" name="${q.id}" id="${q.id}_${idx}" value="${opt}"
              onclick="checkAnswer('${q.id}', '${opt}')">
            <label class="form-check-label" id="${q.id}_label_${idx}" for="${q.id}_${idx}">
              ${opt}
            </label>
          </div>
        `;
    });

    div.innerHTML = `
      <p class="fw-bold">${q.text}</p>
      ${optionsHTML}
      <br/>
    `;
    exerciseContainer.appendChild(div);
  });
};

// For crop Farming
function cropCheckAnswers() {
  let score = 0;

  cropFarming.questions.forEach((q) => {
    const selected = document.querySelector(`input[name="${q.id}"]:checked`);
    const correctAnswer = q.answer;
    if (selected && Number(selected.value.trim()) === correctAnswer) {
      score++;
    }
  });

  const percentage = (score / cropFarming.questions.length) * 100;
  const resultDiv = document.getElementById("result");

  const userName = prompt("Enter your name for the badge:");

  if (percentage >= 60) {
    resultDiv.innerHTML = `
        <div class="alert alert-success">
          <h4>Congratulations, ${userName}!</h4>
          <p>You scored ${percentage}%. You passed the test!</p>
        </div>
      `;

    // Set badge content
    document.getElementById(
      "badgeName"
    ).innerText = `${userName} - ${percentage}%`;

    // Show modal
    const badgeModal = new bootstrap.Modal(
      document.getElementById("badgeModal")
    );
    badgeModal.show();
  } else {
    resultDiv.innerHTML = `
        <div class="alert alert-danger">
          <h4>Sorry, ${userName}.</h4>
          <p>You scored ${percentage}%. Please try again.</p>
        </div>
      `;
  }
}

function downloadBadge() {
  const badge = document.getElementById("badgeContent");

  html2canvas(badge).then((canvas) => {
    const link = document.createElement("a");
    link.download = "badge.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}

// For exercises

function checkAnswer(questionId, selectedValue) {
  const question = testData.questions.find((q) => q.id === questionId);

  question.options.forEach((opt, idx) => {
    const input = document.getElementById(`${questionId}_${idx}`);
    const label = document.getElementById(`${questionId}_label_${idx}`);

    // Reset
    label.innerHTML = opt;
    label.classList.remove("correct", "incorrect");
  });

  question.options.forEach((opt, idx) => {
    const label = document.getElementById(`${questionId}_label_${idx}`);

    if (opt === question.answer) {
      label.innerHTML = `✅ ${opt}`;
      label.classList.add("correct");
    } else if (opt === selectedValue) {
      if (selectedValue !== question.answer) {
        label.innerHTML = `❌ ${opt}`;
        label.classList.add("incorrect");
      }
    }
  });

  // Disable options after selection
  question.options.forEach((opt, idx) => {
    const input = document.getElementById(`${questionId}_${idx}`);
    input.disabled = true;
  });
}
