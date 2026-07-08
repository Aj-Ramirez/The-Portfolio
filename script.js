window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  const pageContainer = document.querySelector(".container");
  pageContainer.setAttribute("data-scroll-container", "");

  const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true,
    getDirection: true,
  });

  scroller.on("scroll", function (t) {
    document.documentElement.setAttribute("data-direction", t.direction);
  });

  scroller.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(pageContainer, {
    scrollTop(value) {
      return arguments.length
        ? scroller.scrollTo(value, 0, 0)
          : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: pageContainer.style.transform ? "transform" : "fixed",
  });

  // Pinning and horizontal scrolling
  let horizontalSections = document.querySelectorAll(".horizontal-scroll");

  horizontalSections.forEach((horizontalSection) => {
    let pinWrap = horizontalSection.querySelector(".pin-wrap");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;
    gsap.to(pinWrap, {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        scrub: true,
        trigger: horizontalSection,
        pin: true,
        start: "top top",
        end: () => `+=${pinWrapWidth}`,
        invalidateOnRefresh: true,
      },

      x: -horizontalScrollLength,
      ease: "none",
    });
  });

  // Pinning and Rhorizontal scrolling
  let horizontalSections1 = document.querySelectorAll(".R-horizontal-scroll");

  horizontalSections1.forEach((horizontalSection1) => {
    let pinWrap = horizontalSection1.querySelector(".R-pin-wrap");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;
    gsap.to(pinWrap, {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        scrub: true,
        trigger: horizontalSection1,
        pin: true,
        start: "top top",
        end: () => `+=${pinWrapWidth}`,
        invalidateOnRefresh: true,
      },
      x: horizontalScrollLength, // Change the direction to positive value
      ease: "none",
    });
  });

// COLOR CHANGER 
  const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
  scrollColorElems.forEach((colorSection, i) => {
    const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
    const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

    ScrollTrigger.create({
      trigger: colorSection,
      scroller: "[data-scroll-container]",
      start: "top 50%",
      onEnter: () =>
        gsap.to("body", {
          backgroundColor: colorSection.dataset.bgcolor,
          color: colorSection.dataset.textcolor,
          overwrite: "auto",
        }),

      onLeaveBack: () =>
        gsap.to("body", {
          backgroundColor: prevBg,
          color: prevText,
          overwrite: "auto",
        }),
    });
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update());

  ScrollTrigger.refresh();

});

  // HEADING TEXT FILL ANIMATION
  function applyStylesWithColor() {
    document.getElementById("heading1").style.color = "#111c27";
    document.getElementById("heading2").style.color = "#3782ce";
    //  document.getElementById("heading2").classList.add("heading2");
  }
  setTimeout(applyStylesWithColor, 2000);

  //  HERO BTN AND HEADING CHANGE TEXT
  function changeTextFront(text) {
    const front = document.querySelector("#front");
    front.textContent = text;
      front.animate(
    [
      { opacity: 0, transform: "translateY(10px)", filter: "blur(2px)" },
      { opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }
    ],
    {
      duration: 400,
      easing: "ease-out"
    }
  );
  }
  function changeTextEnd(text) {
    const end = document.querySelector("#end");
    end.textContent = text;
      end.animate(
    [
      { opacity: 0, transform: "translateY(10px)", filter: "blur(2px)" },
      { opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }
    ],
    {
      duration: 400,
      easing: "ease-out"
    }
  );
  }
function changeTextDev(text) {
  const dev = document.querySelector("#dev");

  // change text first
  dev.textContent = text;

  // run animation directly from JS
  dev.animate(
    [
      { opacity: 0, transform: "translateY(10px)", filter: "blur(2px)" },
      { opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" }
    ],
    {
      duration: 400,
      easing: "ease-out"
    }
  );
}
  function changeTextHero(text) {
    const dev = document.querySelector("#dev");
    dev.textContent = text;
  }
  function changeText(text) {
    const button = document.querySelector(".button");
    button.textContent = text;
  }
  function changeTextIntro(text) {
    const button = document.querySelector(".iconnect-btn");
    button.textContent = text;
  }
  // END

// BG-DATA-COLOR CHANGE
// data-bg as attribute
const section = document.querySelector(".xray");
const defaultBg = section.dataset.bgcolor;

document.querySelectorAll(".card, .blurb").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to("body", {
      backgroundColor: card.dataset.bg,
      duration: 0.3,
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to("body", {
      backgroundColor: defaultBg,
      duration: 0.3,
    });
  });
});