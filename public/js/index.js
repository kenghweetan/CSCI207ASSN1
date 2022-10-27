navBtn = document.querySelector(".menu-button");

if (navBtn) {
  navBtn.addEventListener("click", () => {
    console.log(navBtn.classList.toggle("change"));
  });
}

stopResponsiveTransition();

function stopResponsiveTransition() {
  const classes = document.body.classList;
  let timer = null;
  window.addEventListener("resize", function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    } else {
      classes.add("stop-transition");
    }
    timer = setTimeout(() => {
      classes.remove("stop-transition");
      timer = null;
    }, 100);
  });
}

const navlinks = document.querySelectorAll(".nav-link");
const navlinkbackdrop = document.querySelector(".backdrop-animate");
const navContainer = document.querySelector(".nav-container");
navlinkbackdrop.style.transition = "opacity 0.5s ease, visibility 0s 0.5s";
let lastMouseOverElement = null;

Array.from(navlinks).forEach((element) => {
  element.addEventListener("mouseover", () => {
    if (lastMouseOverElement) {
      navlinkbackdrop.style.transition = "0.25s ease-in-out";
    }

    const elementSizeAndPos = element.getBoundingClientRect();
    navlinkbackdrop.style.top = `${elementSizeAndPos.y}px`;
    navlinkbackdrop.style.left = `${elementSizeAndPos.x}px`;
    navlinkbackdrop.style.height = `${elementSizeAndPos.height}px`;
    navlinkbackdrop.style.width = `${elementSizeAndPos.width}px`;
    navlinkbackdrop.style.opacity = 1;
    lastMouseOverElement = element;
  });

  element.addEventListener("mouseout", () => {
    navlinkbackdrop.style.opacity = 0;
  });
});

navContainer.addEventListener("mouseleave", () => {
  lastMouseOverElement = null;
  navlinkbackdrop.style.transition = "opacity 0.5s ease, visibility 0s 0.5s";
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
