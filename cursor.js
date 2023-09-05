let mouseCursor = document.querySelector(".cursor");

window.addEventListener("mousemove", cursor);
window.addEventListener("mousedown", handleMouseDown);
window.addEventListener("mouseup", handleMouseUp);
window.addEventListener("wheel", handleMouseScrollStart);
window.addEventListener("mousemove", handleMouseScrollEnd);

// Add both "wheel" and "touchmove" event listeners
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

// function handleMouseScrollEnd() {
//      isMouseScroll = false;
//       mouseCursor.classList.remove("scrollMouse")
// }

// function handleMouseScrollEnd() {
//   isMouseScroll = false;
//   mouseCursor.style.transition = "width 0.5s, height 0.5s, border-radius 0.3s ease"; // Add transition to width and height
//   mouseCursor.classList.remove("scrollMouse");

//   // After the transition, reset the transition property to avoid unintended animations
//   mouseCursor.addEventListener("transitionend", () => {
//     mouseCursor.style.transition = "";
//   }, { once: true });
// }

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
    "width 0.7s, height 0.7s, border-radius 0.7s, transform 0.3s ease";
  mouseCursor.classList.remove("scrollMouse");

  mouseCursor.addEventListener(
    "transitionend",
    () => {
      mouseCursor.style.transition = "";
    },
    { once: true }
  );
}

// let isMouseMove = false;
// let mouseMoveTimeout;

// window.addEventListener('mousemove', handleMouseMove);
// window.addEventListener('mousedown', handleMouseDown);
// window.addEventListener('mouseup', handleMouseUp);

// function handleMouseMove(e) {
//   // Clear any previous timeout to prevent unnecessary toggling
//   clearTimeout(mouseMoveTimeout);

//   // Set the cursor position
//   mouseCursor.style.top = e.pageY + 'px';
//   mouseCursor.style.left = e.pageX + 'px';

//   // Add logic to handle cursor shrink when not moving
//   isMouseMove = true;
//   mouseCursor.classList.add("shrinkCursor");
//   mouseCursor.style.transition = "width 0.7s, height 0.7s, border-radius 0.7s, transform 0.3s ease";

//   // Set a timeout to remove the class after a certain period of inactivity
//   mouseMoveTimeout = setTimeout(() => {
//     isMouseMove = false;
//     mouseCursor.classList.remove("shrinkCursor");
//   }, 100); // Adjust the timeout value as needed
// }
