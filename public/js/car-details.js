document.getElementById("serangoon-map").style.display = "none";

document
  .getElementById("pickupLocation")
  .addEventListener("change", handleChange);

function handleChange(event) {
  const selection = event.target.value;
  if (selection.toLocaleUpperCase() === "SERANGOON BRANCH") {
    document.getElementById("toa-payoh-map").style.display = "none";
    document.getElementById("serangoon-map").style.display = "block";
  } else {
    document.getElementById("serangoon-map").style.display = "none";
    document.getElementById("toa-payoh-map").style.display = "block";
    document.get
  }
}
