let mouseCursor = document.querySelector(".cursor");

window.addEventListener("mousemove", cursor);
window.addEventListener("mousedown", handleMouseDown);
window.addEventListener("mouseup", handleMouseUp);
window.addEventListener("wheel", handleMouseScrollStart);
window.addEventListener("mousemove", handleMouseScrollEnd);

// Add both "wheel" and "touchmove" event listenert
window.addEventListener("wheel", handleScroll);
window.addEventListener("touchmove", handleScroll);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}
function handleMouseDown() {
  isMouseDown = true;
  mouseCursor.classList.add("shrinkCursor");
}
function handleMouseUp() {
  isMouseDown = false;
  mouseCursor.classList.remove("shrinkCursor");
}
function handleMouseScrollStart() {
  isMouseScroll = true;
  mouseCursor.classList.add("scrollMouse");
}


let scrollingTimeout;
let isScrolling = false;

function handleScroll() {
  clearTimeout(scrollingTimeout);
  isScrolling = true;

  scrollingTimeout = setTimeout(() => {
    if (isScrolling) {
      handleMouseScrollEnd();
      isScrolling = false;
    }
  }, 100); // Adjust the timeout value as needed
}

function handleMouseScrollEnd() {
  mouseCursor.style.transition =
    "width 0.3s, height 0.3s, border-radius 0.3s, transform 0.3s ease";
  mouseCursor.classList.remove("scrollMouse");

  mouseCursor.addEventListener(
    "transitionend",
    () => {
      mouseCursor.style.transition = "";
    },
    { once: true }
  );
}
