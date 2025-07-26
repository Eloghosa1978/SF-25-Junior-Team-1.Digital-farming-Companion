// Generate questions dynamically
window.onload = () => {
  const animalFarmingContainer = document.getElementById(
    "animal-farming-questions"
  );

  // Animal Farming
  animalFarming.questions.forEach((q) => {
    const div = document.createElement("div");
    div.className = "mb-2 lead bg-light shadow-lg p-4 rounded";
    div.style = "border: 1px solid #81d4fa; font-size: 1.3rem;";
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

    animalFarmingContainer.appendChild(div);
  });
};

// For Animal Farming
function animalCheckAnswers() {
  let score = 0;

  animalFarming.questions.forEach((q) => {
    const selected = document.querySelector(`input[name="${q.id}"]:checked`);
    const correctAnswer = q.answer;
    if (selected && Number(selected.value.trim()) === correctAnswer) {
      score++;
    }
  });

  const percentage = (score / animalFarming.questions.length) * 100;
  const resultDiv = document.getElementById("result");
  const userName = localStorage.getItem("username");

  if (percentage >= 70) {
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

  // Save Achievement

  const category = "Animal-Farming";
  const storageKey = `achievements-${category}`;

  let achievements = JSON.parse(localStorage.getItem(storageKey)) || [];

  let newAchievement = {
    title: `Completed ${category.replace("-", " ")} Quiz`,
    score: `${percentage}%`,
    user: userName,
    date: new Date().toLocaleDateString(),
  };

  // ✅ Only check for duplicate title & user
  const alreadyExists = achievements.some(
    (a) => a.title === newAchievement.title && a.user === newAchievement.user
  );

  if (!alreadyExists) {
    achievements.push(newAchievement);
    localStorage.setItem(storageKey, JSON.stringify(achievements));
    console.log(`Achievements for ${category} saved:`, achievements);
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
