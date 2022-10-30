document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("username")) {
    isLoggedIn();
  }
});

const showDialog = () => {
  document.querySelector(".login-modal").classList.add("show");
  const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
  const body = document.body;
  body.style.position = "fixed";
  body.style.top = `-${scrollY}`;
  body.style.overflowY = "hidden";
};

const closeDialog = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = "";
  body.style.top = "";
  body.style.overflowY = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
  document.querySelector(".login-modal").classList.remove("show");
};

window.addEventListener("scroll", () => {
  document.documentElement.style.setProperty(
    "--scroll-y",
    `${window.scrollY}px`
  );
});

const loginButton = document.querySelector("#login-button");
loginButton.addEventListener("click", showDialog);

/* const loginCancelButton = document.querySelector("#cancel-login");
loginCancelButton.addEventListener("click", closeDialog);
 */
const loginModal = document.querySelector(".close-login");
loginModal.onclick = () => {
  closeDialog();
  return false;
};

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const signupFields = document.querySelector(".signup .field-wrapper");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
  signupFields.style.maxHeight = "1080px";
  signupFields.style.display = "block";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
  signupFields.style.maxHeight = "0px";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

console.log(localStorage.getItem("logged-in"));
const signOutBtn = document.querySelector("#signout-button");

signOutBtn.addEventListener("click", handleSignout);

function handleLogin(event) {
  const emailField = document.getElementById("email");
  if (emailField) {
    if (emailField.value === "admin@azoom.com") {
      localStorage.setItem("username", "admin");
    } else {
      localStorage.setItem("username", "user");
    }
  }

  console.log("hi");
  closeDialog();
  document.querySelector(".nav-link.hide").classList.remove("hide");
  document.querySelector(".nav-link.login").classList.add("hide");
  isLoggedIn();
  if (window.location.href.includes("car-details.html")) {
    window.location.href = "payment.html";
  }
}

function handleSignout() {
  localStorage.removeItem("username");
  document.querySelector(".nav-link.user-profile-link").classList.add("hide");
  document.querySelector(".nav-link.signout").classList.add("hide");
  document.querySelector(".nav-link.login").classList.remove("hide");
}

function isLoggedIn() {
  document.querySelector(".nav-link.hide").classList.remove("hide");
  document.querySelector(".nav-link.signout").classList.remove("hide");
  document.querySelector(".nav-link.login").classList.add("hide");
  if (localStorage.getItem("username") === "admin") {
    document.querySelectorAll(".admin-link").forEach((element) => {
      element.classList.remove("hide");
    });
    document.querySelectorAll(".user-link").forEach((element) => {
      element.classList.add("hide");
    });
  } else {
    document.querySelectorAll(".user-link").forEach((element) => {
      element.classList.remove("hide");
    });
    document.querySelectorAll(".admin-link").forEach((element) => {
      element.classList.add("hide");
    });
  }
}
