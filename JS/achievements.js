// Display achievement from local storage
const achievements = JSON.parse(localStorage.getItem("achievements")) || [];

const container = document.getElementById("achievementsList");

achievements.forEach((achievement) => {
  const item = document.createElement("div");
  item.className = "achievement-item col-md-4 mb-3 col-sm-6 col-lg-3 shadow-lg";
  item.innerHTML = `<strong>${achievement.title}</strong><br><small>${achievement.date}</small>`;
  container.appendChild(item);
});

if (achievements.length === 0) {
  const noAchievements = document.createElement("p");
  noAchievements.className = "text-center text-muted no-achievements";
  noAchievements.textContent = "No achievements yet.";
  container.appendChild(noAchievements);
}
