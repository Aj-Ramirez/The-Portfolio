// let mouseCursor = document.querySelector(".cursor");

// window.addEventListener("mousemove", cursor);
// window.addEventListener("mousedown", handleMouseDown);
// window.addEventListener("mouseup", handleMouseUp);
// window.addEventListener("wheel", handleMouseScrollStart);
// window.addEventListener("mousemove", handleMouseScrollEnd);

// // Add both "wheel" and "touchmove" event listenert
// window.addEventListener("wheel", handleScroll);
// window.addEventListener("touchmove", handleScroll);

// function cursor(e) {
//   mouseCursor.style.top = e.pageY + "px";
//   mouseCursor.style.left = e.pageX + "px";
// }
// function handleMouseDown() {
//   isMouseDown = true;
//   mouseCursor.classList.add("shrinkCursor");
// }
// function handleMouseUp() {
//   isMouseDown = false;
//   mouseCursor.classList.remove("shrinkCursor");
// }
// function handleMouseScrollStart() {
//   isMouseScroll = true;
//   mouseCursor.classList.add("scrollMouse");
// }


// let scrollingTimeout;
// let isScrolling = false;

// function handleScroll() {
//   clearTimeout(scrollingTimeout);
//   isScrolling = true;

//   scrollingTimeout = setTimeout(() => {
//     if (isScrolling) {
//       handleMouseScrollEnd();
//       isScrolling = false;
//     }
//   }, 100); // Adjust the timeout value as needed
// }

// function handleMouseScrollEnd() {
//   mouseCursor.style.transition =
//     "width 0.3s, height 0.3s, border-radius 0.3s, transform 0.3s ease";
//   mouseCursor.classList.remove("scrollMouse");

//   mouseCursor.addEventListener(
//     "transitionend",
//     () => {
//       mouseCursor.style.transition = "";
//     },
//     { once: true }
//   );
// }


const mouseCursor = document.querySelector(".cursor");

// =====================================================
// STATE
// =====================================================

let isMouseDown = false;
let scrollTimeout;

const mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};

const cursor = {
  x: mouse.x,
  y: mouse.y,
};

const previous = {
  x: mouse.x,
  y: mouse.y,
};

const cursorState = {
  clickScale: 1,
  scrollScaleX: 1,
  scrollScaleY: 1,
  scrollRotation: 0,
};

// =====================================================
// EVENTS
// =====================================================

window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("mousedown", handleMouseDown);
window.addEventListener("mouseup", handleMouseUp);
window.addEventListener("wheel", handleMouseScroll);

// =====================================================
// MOUSE MOVE
// =====================================================

function handleMouseMove(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

// =====================================================
// MOUSE DOWN
// =====================================================

function handleMouseDown() {
  isMouseDown = true;
  mouseCursor.classList.add("shrinkCursor");

  gsap.to(cursorState, {
    clickScale: 0.72,
    duration: 0.15,
    ease: "power2.out",
    overwrite: true,
  });
}

// =====================================================
// MOUSE UP
// =====================================================

function handleMouseUp() {
  isMouseDown = false;
  mouseCursor.classList.remove("shrinkCursor");

  gsap.to(cursorState, {
    clickScale: 1,
    duration: 0.45,
    ease: "back.out(3)",
    overwrite: true,
  });
}

// =====================================================
// SCROLL
// =====================================================

function handleMouseScroll(e) {
  clearTimeout(scrollTimeout);

  const direction = e.deltaY > 0 ? 1 : -1;

  gsap.to(cursorState, {
    scrollScaleX: 0.75,
    scrollScaleY: 1.8,

    // Down = 0°, Up = 180°
    scrollRotation: direction > 0 ? 0 : 0,

    duration: 0.18,
    ease: "power2.out",
    overwrite: true,
  });

  scrollTimeout = setTimeout(() => {
    gsap.to(cursorState, {
      scrollScaleX: 1,
      scrollScaleY: 1,
      scrollRotation: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.45)",
      overwrite: true,
    });
  }, 100);
}

// =====================================================
// LIQUID CURSOR
// =====================================================

gsap.ticker.add(() => {
  // Smooth follow
  cursor.x += (mouse.x - cursor.x) * 0.16;
  cursor.y += (mouse.y - cursor.y) * 0.16;

  // Velocity
  const dx = cursor.x - previous.x;
  const dy = cursor.y - previous.y;

  const speed = Math.sqrt(dx * dx + dy * dy);

  // Mouse movement angle
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;

  // Liquid stretch
  //const stretch = Math.min(speed * 0.04, 0.35); //default
  //const stretch = Math.min(speed * 0.01, 0.1); //reduce sensi
  //const stretch = Math.min(speed * 0.04, 0.15); // reduce max stretch
  const stretch = Math.min(speed * 0.02, 0.12); // smooth

  const moveScaleX = 1 + stretch;
  const moveScaleY = 1 - stretch;

  // Final scales
  const finalScaleX =
    moveScaleX *
    cursorState.scrollScaleX *
    cursorState.clickScale;

  const finalScaleY =
    moveScaleY *
    cursorState.scrollScaleY *
    cursorState.clickScale;

  // While scrolling, only point vertically.
  const isScrolling =
    Math.abs(cursorState.scrollScaleY - 1) > 0.01;

  gsap.set(mouseCursor, {
  left: cursor.x,
  top: cursor.y,

  xPercent: -50,
  yPercent: -50,

  rotation: isScrolling
    ? cursorState.scrollRotation
    : angle,

  scaleX: finalScaleX,
  scaleY: finalScaleY,

  transformOrigin: "50% 50%"
  });

  previous.x = cursor.x;
  previous.y = cursor.y;
});

const cursoreye = document.querySelector(".cursor");

let idleTimer;
let blinkTimer;
let speechTimer;

function showEyes(){

    cursoreye.classList.add("idle");

    scheduleBlink();
    console.log("Show eyes")
}

function hideEyes(){

    cursoreye.classList.remove("idle");
    cursoreye.classList.remove("blink");

    clearTimeout(blinkTimer);

}

const messages = [
    "Explore more!",
    "Hover me 👀",
    "Nice choice.",
    "Keep scrolling.",
    "There's more ↓",
    "Take a look.",
    "Awesome!",
    "Find something cool 😎",
    "Are you bored? 🥺",
    "Still there?",
    "Keep moving"
];

const speech = document.querySelector(".speech");

function randomMessage(){

    speech.textContent =
        messages[Math.floor(Math.random()*messages.length)];

}

function scheduleBlink(){

    clearTimeout(blinkTimer);

    blinkTimer = setTimeout(()=>{

        cursoreye.classList.add("blink");

        setTimeout(()=>{

            cursoreye.classList.remove("blink");

        },180);

    },2500);

}

window.addEventListener("mousemove",()=>{

    hideEyes();

    clearTimeout(idleTimer);

    idleTimer = setTimeout(()=>{

        randomMessage();
        showEyes();

    },3500);

});