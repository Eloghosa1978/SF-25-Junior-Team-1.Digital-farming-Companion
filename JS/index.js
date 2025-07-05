function loadComponent(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
      if (id === "header") {
        const links = document.querySelectorAll("#header nav div a");
        links.forEach((link) => {
          if (
            link.href === window.location.href ||
            link.pathname === window.location.pathname
          ) {
            link.classList.add("active");
          }
        });
      }
    })
    .catch((error) => {
      console.error(`Error loading ${file}:`, error);
      document.getElementById(id).innerHTML = `<p>Error loading ${file}</p>`;
    });
}
window.addEventListener("load", () => {
  loadComponent("loading", "loading.html");
  loadComponent("header", "header.html");
  loadComponent("footer", "footer.html");

  document.getElementById("loading-illustration").style.visibility = "hidden";
});
