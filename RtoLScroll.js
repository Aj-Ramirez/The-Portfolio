window.addEventListener("load", function () {
     gsap.registerPlugin(ScrollTrigger);
   
     const pageContainer = document.querySelector(".container");
     pageContainer.setAttribute("data-scroll-container", "");
   
     const scroller = new LocomotiveScroll({
       el: pageContainer,
       smooth: true,
       getDirection: true
     });
   
     scroller.on("scroll", ScrollTrigger.update);
   
     ScrollTrigger.scrollerProxy(pageContainer, {
       scrollTop(value) {
         return arguments.length ?
           scroller.scrollTo(value, 0, 0) :
           scroller.scroll.instance.scroll.y;
       },
       getBoundingClientRect() {
         return {
           right: 0,
           top: 0,
           width: window.innerWidth,
           height: window.innerHeight
         };
       },
       pinType: pageContainer.style.transform ? "transform" : "fixed"
     });
   
     // Pinning and horizontal scrolling
   
     let horizontalSections = document.querySelectorAll(".R-horizontal-scroll");
   
     horizontalSections.forEach(horizontalSection => {
       let pinWrap = horizontalSection.querySelector(".R-pin-wrap");
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
           invalidateOnRefresh: true
         },
         x: horizontalScrollLength, // Change the direction to positive value
         ease: "none"
       });
     });
//      // Move the last part (h2) into the visible area
//      gsap.set(pinWrap.querySelector(".RtoL-heading"), {
//      x: horizontalScrollLength // Move the h2 element into the visible area
//    });
   
     ScrollTrigger.addEventListener("refresh", () => scroller.update());
   
     ScrollTrigger.refresh();
   });
   