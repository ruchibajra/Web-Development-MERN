document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const togglePassword = document.getElementById("togglePassword");
  const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
  const password = document.getElementById("password");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const confirmPassword = document.getElementById("confirm-password");

  //   password
  togglePassword.addEventListener("click", () => {
    const type = password.type === "password" ? "text" : "password";
    password.type = type;
    togglePassword.classList.toggle("ri-eye-off-line");
    togglePassword.classList.toggle("ri-eye-line");
  });

  //   confirm password
  toggleConfirmPassword.addEventListener("click", () => {
    const type = confirmPassword.type === "password" ? "text" : "password";
    confirmPassword.type = type;
    toggleConfirmPassword.classList.toggle("ri-eye-off-line");
    toggleConfirmPassword.classList.toggle("ri-eye-line");
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm()) {
      alert(
        `Registration successful!\n\nUsername: ${username.value}\nEmail: ${email.value}`
      );
    }
  });

  function validateForm() {
    let isValid = true;

    if (username.value.trim() === "") {
      setError(username, "Username is required");
      isValid = false;
    } else {
      clearError(username);
    }

    if (email.value.trim() === "") {
      setError(email, "Email is required");
      isValid = false;
    } else if (!validateEmail(email.value)) {
      setError(email, "Enter a valid email");
      isValid = false;
    } else {
      clearError(email);
    }

    if (password.value.trim() === "") {
      setError(password, "Password is required");
      isValid = false;
    } else if (password.value.length < 6) {
      setError(password, "Password must be at least 6 characters");
      isValid = false;
    } else {
      clearError(password);
    }

    if (confirmPassword.value.trim() === "") {
      setError(password, "Confirm password is required");
      isValid = false;
    }

    if (password.value == confirmPassword.value) {
      isValid = true;
    } else {
      isValid = false;
      setError(confirmPassword, "Confirm password and password did not match");
    }

    return isValid;
  }

  function setError(input, message) {
    const formGroup = input.closest(".form-group");
    const errorDisplay = formGroup.querySelector(".error-message");
    if (errorDisplay) {
      errorDisplay.textContent = message;
      errorDisplay.style.display = "block";
    }
  }

  function clearError(input) {
    const formGroup = input.closest(".form-group");
    const errorDisplay = formGroup.querySelector(".error-message");
    if (errorDisplay) {
      errorDisplay.textContent = "";
      errorDisplay.style.display = "none";
    }
  }

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }
});
