document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    const form = document.querySelector("form");
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let hasError = false;

    const oldMes = form.querySelector(".error-message");
    if (oldMes) {
      oldMes.remove();
    }
    event.preventDefault();
    console.log(email, password);

    if (!email || !password) {
      let p = document.createElement("p");
      p.innerText = "Please fill in all fields";
      p.className = "error-message";
      p.style.color = "red";
      form.appendChild(p);
      event.preventDefault();
      hasError = true;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      let p = document.createElement("p");
      p.innerText = "Please enter a valid email address";
      p.className = "error-message";
      p.style.color = "red";
      form.appendChild(p);
      event.preventDefault();
      hasError = true;
    }
    if (!hasError) {
      window.location.href = "./Dashboard/dashboard.html";
    }
  });
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
