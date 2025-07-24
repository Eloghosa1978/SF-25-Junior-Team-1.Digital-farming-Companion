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
  // anc.forEach((link) => (link.style.display = "flex"));
  anc.forEach((link) => (link.style.width = "100%"));

  const nav = document.querySelector(".sidebar-div");
  nav.style.width = "220px";
  // Wait for the nav to finish expanding before setting display to block
  nav.addEventListener(
    "transitionend",
    () => {
      anc.forEach(
        (link) =>
          (link.style =
            "display:block; boxShadow: 4px 0 10px rgba(0, 0, 0, 0.678);")
      );
    },
    { once: true }
  );
  nav.addEventListener("mouseenter", () => {
    showNav();
    nav.style.zIndex = "1000";
    nav.style.position = "fixed";
    nav.classList.add("shadow-lg");
  });
  nav.addEventListener("mouseleave", () => {
    hideNav();
    nav.style.zIndex = "1000";
    nav.style.position = "";
    nav.classList.remove("shadow-lg");
  });
}

// Active class for the current page
// links.forEach((link) => {
//   if (link.href === window.location.href) {
//     link.classList.add("active");
//   } else {
//     link.classList.remove("active");
//   }
// });
