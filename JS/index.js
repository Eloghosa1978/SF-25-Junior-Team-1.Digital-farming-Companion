function loadComponent(id, file) {
  return fetch(file)
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
  Promise.all([
    loadComponent("header", "header.html"),
    loadComponent("footer", "footer.html"),
  ]).then(() => {
    setTimeout(() => {
      const loader = document.getElementById("loading");
      if (loader) loader.style.display = "none";
    }, 200);
  });
});
