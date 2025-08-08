document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    const form = document.getElementById("form");
    const fName = document.getElementById("fname").value.trim();
    const lName = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const cPassword = document.getElementById("cpassword").value.trim();
    const dob = document.getElementById("dob").value.trim();

    event.preventDefault();
    // Remove all existing error messages before showing a new one
    const oldMessages = form.querySelectorAll(".error-message");
    oldMessages.forEach(function (msg) {
      msg.remove();
    });

    var hasError = false;

    console.log(fName, lName, email, password, cPassword, dob);

    if (!fName || !lName || !email || !password || !cPassword || !dob) {
      let p = document.createElement("p");
      p.innerText = "Please fill in all fields";
      p.className = "error-message";
      p.style.color = "red";
      form.appendChild(p);
      hasError = true;
    }
    if (password !== cPassword) {
      let p = document.createElement("p");
      p.innerText = "Passwords do not match";
      p.className = "error-message";
      p.style.color = "red";
      form.appendChild(p);
      hasError = true;
    }
    if (password.length < 8) {
      let p = document.createElement("p");
      p.innerText = "Password must be at least 8 characters long";
      p.className = "error-message";
      p.style.color = "red";
      form.appendChild(p);
      hasError = true;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      let p = document.createElement("p");
      p.innerText = "Please enter a valid email address";
      p.className = "error-message";
      p.style.color = "red";
      form.appendChild(p);
      hasError = true;
    }

    if (hasError) {
      event.preventDefault();
    } else {
      // Redirect to dashboard
      window.location.href = "./Dashboard/dashboard.html";
    }
  });

  // For toggling the password visibility
  const togglePassword1 = document.getElementById("toggle-password1");
  togglePassword1.addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const cpasswordField = document.getElementById("cpassword");
    if (passwordField.type === "password") {
      passwordField.type = "text";

      togglePassword1.innerHTML = '<i class="bi bi-eye-fill"></i>';
    } else {
      passwordField.type = "password";
      togglePassword1.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
    }
  });
  const togglePassword2 = document.getElementById("toggle-password2");
  togglePassword2.addEventListener("click", function () {
    const cpasswordField = document.getElementById("cpassword");
    if (cpasswordField.type === "password") {
      cpasswordField.type = "text";
      togglePassword2.innerHTML = '<i class="bi bi-eye-fill"></i>';
    } else {
      cpasswordField.type = "password";
      togglePassword2.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
    }
  });
});
