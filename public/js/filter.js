const filterbtn = document.querySelector(".filter-toggle");

filterbtn.addEventListener("click", () => {
  document.querySelector(".filters").classList.toggle("open");
  document.querySelector(".filter-toggle").classList.toggle("open");
});

const cancelbtn = document.querySelector("#cancel.btn");

cancelbtn.addEventListener("click", () => {
  document.querySelector(".filters").classList.toggle("open");
  document.querySelector(".filter-toggle").classList.toggle("open");
});

function filter() {
  const cars = Array.from(document.querySelectorAll("li.card"));
  document.querySelector(".filters").classList.toggle("open");
  document.querySelector(".filter-toggle").classList.toggle("open");
  cars.forEach((car, i) => {
    if (i != 0) {
      car.remove();
    } else {
      car.style.flex = "none";
    }
  });
}
