const showPaymentDialog = () => {
  document.querySelector(".payment-modal").classList.add("show");
  const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
  const body = document.body;
  body.style.position = "fixed";
  body.style.top = `-${scrollY}`;
  body.style.overflowY = "hidden";
  setTimeout(() => {
    document.querySelector(".circle-loader").classList.add("load-complete");
    document.querySelector(".checkmark").style.display = "block";
    document.querySelector(".payment-content").classList.add("show");
  }, 1000);
};

const closePaymentDialog = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = "";
  body.style.top = "";
  body.style.overflowY = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
  document.querySelector(".payment-modal").classList.remove("show");
};

const paymentButton = document.querySelector("#payment-button");
paymentButton.addEventListener("click", showPaymentDialog);

document.getElementById("close-payment").addEventListener("click", () => {
  window.location.href = "index.html";
});
