const categories = ["Crop-Farming", "Animal-Farming", "Green-Smart-Farming"];
let allAchievements = [];

const container = document.getElementById("achievementsList");

categories.forEach((cat) => {
  const data = JSON.parse(localStorage.getItem(`achievements-${cat}`)) || [];

  data.forEach((achievement) => {
    const item = document.createElement("div");
    item.className =
      "container-sm achievement-item col-md-4 mb-3 col-sm-6 col-lg-3 shadow rounded text-center";
    item.innerHTML = `
      <strong class="h2">${achievement.title}</strong><br />
      <span class="score">${achievement.score}</span><br /><br />
      <small class="date">${achievement.date}</small>
    `;
    container.appendChild(item);
  });

  allAchievements = [...allAchievements, ...data];
});

if (allAchievements.length === 0) {
  const noAchievements = document.createElement("p");
  noAchievements.className = "text-center text-muted no-achievements";
  noAchievements.textContent = "No achievements yet.";
  container.appendChild(noAchievements);
}

console.log("All Achievements:", allAchievements);

// const achievements = JSON.parse(localStorage.getItem("achievements")) || [];

// achievements.forEach((achievement) => {
//   const item = document.createElement("div");
//   item.className = "achievement-item col-md-4 mb-3 col-sm-6 col-lg-3 shadow-lg";
//   item.innerHTML = `<strong>${achievement.title}</strong><br><small>${achievement.date}</small>`;
//   container.appendChild(item);
// });

// if (achievements.length === 0) {
//   const noAchievements = document.createElement("p");
//   noAchievements.className = "text-center text-muted no-achievements";
//   noAchievements.textContent = "No achievements yet.";
//   container.appendChild(noAchievements);
// }
