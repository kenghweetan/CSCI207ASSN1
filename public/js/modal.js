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

const loginCancelButton = document.querySelector("#cancel-login");
loginCancelButton.addEventListener("click", closeDialog);
