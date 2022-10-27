/**
 * Credit cards with vanilla js/css/html no framework needed. Only fonts are hosted externally.
 * If you want to contact me regarding these designs/implementations, drop me an e-mail on
 * vladislav@boiko.studio
 */

const ALLOW_LIST = new Set([
  "Backspace",
  "ArrowLeft",
  "ArrowRight",
  "Tab",
  "Enter",
  "ArrowDown",
  "ArrowUp",
]);

(() => {
  const partSelector = ".card-number__part";
  document.querySelectorAll(partSelector).forEach((domInput) =>
    domInput.addEventListener("keydown", (e) => {
      if ((e.key <= "0" || "9" <= e.key) && !ALLOW_LIST.has(e.code)) {
        e.preventDefault();
        return false;
      }
      if (
        (!e.target.value && e.code === "Backspace") ||
        ((e.code === "ArrowLeft" || e.code === "Backspace") &&
          e.target.selectionStart === 0)
      ) {
        const previousSibling = e.target.previousElementSibling;
        if (previousSibling?.tagName?.toLowerCase() === "input") {
          previousSibling.focus();
        }
      }
      if (
        (e.target.value.length === 4 && !(e.key <= "0" || "9" <= e.key)) ||
        (e.code === "ArrowRight" &&
          e.target.selectionEnd === e.target.value.length)
      ) {
        const nextSibling = e.target.nextElementSibling;
        if (nextSibling?.tagName?.toLowerCase() === "input") {
          nextSibling.focus();
        }
      }
    })
  );
})();
