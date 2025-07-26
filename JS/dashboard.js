function loadComponent(id, file) {
  return fetch(file)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((error) => {
      console.error(`Error loading ${file}:`, error);
      document.getElementById(id).innerHTML = `<p>Error loading ${file}</p>`;
    });
}
document.getElementById("nav").innerHTML = `
  <nav class="navbar navbar-expand-md navbar-dark bg-success ">
    <div class="container-fluid d-flex align-items-center">
      <div class="d-flex">
        <button
          class="navbar-toggler btn d-sm-block d-none"
          onclick="toggleNav()"
        >
          <i class="navbar-toggler-icon"></i>
        </button>
        <button
          class="btn btn-success navbar-toggler me-2 d-block d-sm-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebarOffcanvas"
          aria-controls="sidebarOffcanvas"
        >
          <i class="navbar-toggler-icon"></i>
        </button>
        <a class="navbar-brand d-flex align-items-center p-0 m-0" href="#">
          <img
            src="../src/IMG/logo.png"
            alt=""
            style="width: 100px; height: 50px; max-width: 200px"
          />
        </a>
      </div>
    </div>
  </nav>
`;
// function loadComponent(id, file) {
//   return fetch(file)
//     .then((res) => res.text())
//     .then((data) => {
//       document.getElementById(id).innerHTML = data;
//       if (id === "header") {
//         const links = document.querySelectorAll("#header nav div a");
//         links.forEach((link) => {
//           if (
//             link.href === window.location.href ||
//             link.pathname === window.location.pathname
//           ) {
//             link.classList.add("active");
//           }
//         });
//       }
//     })
//     .catch((error) => {
//       console.error(`Error loading ${file}:`, error);
//       document.getElementById(id).innerHTML = `<p>Error loading ${file}</p>`;
//     });
// }
window.addEventListener("load", () => {
  Promise.all([loadComponent("header", "dashboardNav.html")]).then(() => {
    setTimeout(() => {
      const loader = document.getElementById("loading");
      if (loader) loader.style.display = "none";
    }, 200);
  });
});

let nav = document.getElementById("nav");
nav.addEventListener("scroll", () => {
  if (nav.scrollTop > 0) {
    nav.className.add("nav-shadow");
  } else {
    nav.className.remove("nav-shadow");
  }
});

function openChat() {
  const chat = document.getElementById("chat-container");

  chat.classList.add("open-chat-box");
}
function closeChat() {
  const chat = document.getElementById("chat-container");

  chat.classList.remove("open-chat-box");
}

// Acccessing the user name from localStorage
const userName = localStorage.getItem("username");

document.getElementById("username").textContent = userName ? userName : "Guest";
