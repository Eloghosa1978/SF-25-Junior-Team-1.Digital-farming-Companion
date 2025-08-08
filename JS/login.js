document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const errorMsg = document.getElementById("error-msg");
  const errorContainer = document.getElementById("error-container");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Always prevent default first

    const username = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    // Reset error state
    errorMsg.textContent = "";
    errorContainer.style.display = "none";

    // Validation
    if (!username || username.length < 3) {
      errorMsg.textContent = "Username must be at least 3 characters long.";
      errorContainer.style.display = "block";
      return;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      errorMsg.textContent = "Please enter a valid email address.";
      errorContainer.style.display = "block";
      return;
    }

    // If validation passes:
    localStorage.setItem("username", username);

    // Redirect
    window.location.href = "/DashBoard/dashboard.html";
  });

  // // const name = document.getElementById("name").value.trim();
  // // const email = document.getElementById("email").value.trim();
  // // const password = document.getElementById("password").value.trim();
  // let hasError = false;
  // // event.preventDefault();
  // // const oldMes = form.querySelector(".error-message");
  // // if (oldMes) {
  // //   oldMes.remove();
  // // }
  // // console.log(name, password);
  // // if (!email || !password || !name) {
  // //   let p = document.createElement("p");
  // //   p.innerText = "Please fill in all fields";
  // //   p.className = "error-message";
  // //   p.style.color = "red";
  // //   form.appendChild(p);
  // //   event.preventDefault();
  // //   hasError = true;
  // // }
  // // if (!/\S+@\S+\.\S+/.test(email)) {
  // //   let p = document.createElement("p");
  // //   p.innerText = "Please enter a valid email address";
  // //   p.className = "error-message";
  // //   p.style.color = "red";
  // //   form.appendChild(p);
  // //   event.preventDefault();
  // //   hasError = true;
  // // }
  // window.location.href = "../DashBoard/dashboard.html";
  // if (!hasError) {
  // }
});

document
  .getElementById("toggle-password")
  .addEventListener("click", function () {
    const passwordAttr = document.getElementById("password");
    const icon = this.querySelector("i");

    if (passwordAttr.type === "password") {
      passwordAttr.type = "text";
      icon.classList.remove("bi-eye-slash-fill");
      icon.classList.add("bi-eye-fill");
    } else {
      passwordAttr.type = "password";
      icon.classList.remove("bi-eye-fill");
      icon.classList.add("bi-eye-slash-fill");
    }
  });

document.getElementById("remember-me").addEventListener("change", function () {
  if (this.checked) {
    alert("Remember Me option is selected. Your login details will be saved.");
  } else {
    alert(
      "Remember Me option is deselected. Your login details will not be saved."
    );
  }
});
