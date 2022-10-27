filterbtn = document.querySelector(".filter-toggle");

filterbtn.addEventListener("click", () => {
  document.querySelector(".filters").classList.toggle("open");
  document.querySelector(".filter-toggle").classList.toggle("open");
});
