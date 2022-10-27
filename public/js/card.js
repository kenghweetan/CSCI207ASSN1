const cards = document.querySelectorAll(".card");

Array.from(cards).forEach((card) => {
  let down,
    up,
    link = card.querySelector("a");
  card.style.cursor = "pointer";
  card.onmousedown = (event) => {
    if (event.button === 0) down = +new Date();
  };
  card.onmouseup = (event) => {
    if (event.button !== 0) {
      return false;
    }
    up = +new Date();
    if (up - down < 200) {
      link.click();
    }
  };
});
