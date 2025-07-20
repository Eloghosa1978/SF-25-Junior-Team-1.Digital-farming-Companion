const links = document.querySelectorAll(".link");
links.forEach((link) => {
  if (
    link.href === window.location.href ||
    link.pathname === window.location.pathname
  ) {
    link.classList.add("active");
  }
});

function hideNav() {
  const anc = document.querySelectorAll(".nav-lin");
  anc.forEach(
    (link) => ((link.style.display = "none"), (link.style.width = "1%"))
  );

  const nav = document.querySelector(".sidebar-div");

  nav.style.width = "100px";
}
function toggleNav() {
  const nav = document.querySelector(".sidebar-div");
  if (nav.style.width === "220px") {
    hideNav();
  } else {
    showNav();
  }
}
function showNav() {
  const anc = document.querySelectorAll(".nav-lin");
  anc.forEach((link) => (link.style.display = "flex"));
  anc.forEach((link) => (link.style.width = "100%"));
  anc.forEach((link) => (link.style.display = "block"));
  const nav = document.querySelector(".sidebar-div");
  nav.style.width = "220px";
}
