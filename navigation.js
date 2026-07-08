const burgerNav = document.querySelector(".burger-nav");
const wrapper = document.querySelector(".nav_wrapper");
const inWrapper = document.querySelector(".in_nav_wrapper");
const container = document.querySelector(".container");
const target = document.querySelector(".ul_nav_links");
const target1 = document.querySelector(".ul_social_nav");
const name = document.querySelector("#name");

let isWrapperVisible = false;

burgerNav.addEventListener("click", () => {
  isWrapperVisible = !isWrapperVisible;

  if (isWrapperVisible) {
    openMenu();
  } else {
    closeMenu();
  }
});

function openMenu() {
  wrapper.style.display = "flex";
  inWrapper.style.display = "flex";
  container.style.marginTop = "20vh";

  // Change the name color
  name.style.color = "#091318";

  requestAnimationFrame(() => {
    wrapper.style.top = "0";
    inWrapper.style.top = "0";
  });

  setTimeout(() => {
    container.style.filter = "blur(10px)";
  }, 300);

  setTimeout(() => {
    target.classList.add("visible");
  }, 500);

  setTimeout(() => {
    target1.classList.add("visible");
  }, 800);

  setTimeout(() => {
    target1.style.overflow = "unset";
  }, 1000);
}

function closeMenu() {
  target.classList.remove("visible");
  target1.classList.remove("visible");
  target1.style.overflow = "hidden";

  setTimeout(() => {
    wrapper.style.top = "-70vh";
    inWrapper.style.top = "-60vh";
    container.style.marginTop = "0";
  }, 600);

  setTimeout(() => {
    wrapper.style.display = "none";
    inWrapper.style.display = "none";
    container.style.filter = "blur(0)";

    // Restore original color
    name.style.color = "";
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  burgerNav.removeAttribute("style");

  setTimeout(() => {
    burgerNav.removeAttribute("style");
  }, 2000);
});