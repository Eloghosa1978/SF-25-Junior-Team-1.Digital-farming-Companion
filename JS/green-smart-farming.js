// Generate questions dynamically
window.onload = () => {
  const greenSmartFarmingContainer = document.getElementById(
    "green-smart-questions"
  );

  // Animal Farming
  greenSmartFarming.questions.forEach((q) => {
    const div = document.createElement("div");
    div.className = "mb-2 lead bg-light questions-div p-4 rounded";
    div.style = "border: 1px solid #4caf50; font-size: 1.3rem;";
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

    greenSmartFarmingContainer.appendChild(div);
  });
};

// For Animal Farming
function checkAnswers() {
  let score = 0;

  cropFarming.questions.forEach((q) => {
    const selected = document.querySelector(`input[name="${q.id}"]:checked`);
    const correctAnswer = q.answer;
    if (selected && Number(selected.value.trim()) === correctAnswer) {
      score++;
    }
  });

  const percentage = (score / testData.questions.length) * 100;
  const resultDiv = document.getElementById("result");

  const userName = prompt("Enter your name for the badge:");

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
// Function to print the badge
function printBadge() {
  const badge = document.getElementById("badgeContent");
  const printWindow = window.open("", "_blank");
  printWindow.document.write(`
    <html>
      <head>
        <title>Print Badge</title>
        <style>
          body { font-family: Arial, sans-serif; }
          #badgeContent { text-align: center; }
        </style>
      </head>
      <body>
        ${badge.outerHTML}
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}
