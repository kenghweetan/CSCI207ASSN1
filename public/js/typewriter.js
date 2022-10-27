const message = document.querySelector("#message");
var quoteArray = ["Fast.", "Far.", "Electric."];
var textPosition = 0;
var speed = 200;

async function typewriter(quote) {
  let textPosition = 0;
  while (textPosition != quote.length) {
    message.innerHTML = quote.substr(0, ++textPosition);
    await timeout(speed);
  }

  await timeout(2000);

  while (textPosition >= 0) {
    message.innerHTML = quote.substr(0, textPosition--);
    await timeout(100);
  }
}

function typewriterAnim(quoteArray) {
  return async function () {
    while (true) {
      for (const quote of quoteArray) {
        await typewriter(quote);
        await timeout(500);
      }
    }
  };
}

function timeout(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

window.addEventListener("load", typewriterAnim(quoteArray));
