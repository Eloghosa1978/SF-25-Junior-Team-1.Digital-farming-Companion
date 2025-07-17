// Season Exercise
window.onload = () => {
  const container = document.getElementById("questions");

  seasonalFarming.questions.forEach((q) => {
    const div = document.createElement("div");
    div.className = "mb-4 p-3 border rounded bg-white";
    let optionsHTML = "";

    q.options.forEach((opt, idx) => {
      optionsHTML += `
            <div class="form-check">
              <input class="form-check-input" type="radio" name="${q.id}" id="${q.id}_${idx}" value="${idx}"
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
        `;

    container.appendChild(div);
  });
};

function checkAnswer(questionId, selectedValue) {
  const question = seasonalFarming.questions.find((q) => q.id === questionId);

  const selected = document.querySelector(
    `input[name="${questionId}"]:checked`
  );

  question.options.forEach((opt, idx) => {
    const label = document.getElementById(`${questionId}_label_${idx}`);

    // Reset
    label.innerHTML = opt;
    label.classList.remove("correct", "incorrect");
  });

  question.options.forEach((opt, idx) => {
    const label = document.getElementById(`${questionId}_label_${idx}`);

    if (selectedValue === question.answer) {
      label.innerHTML = `✅ ${opt}`;
      label.classList.add("correct");
    } else if (selected === selectedValue) {
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
