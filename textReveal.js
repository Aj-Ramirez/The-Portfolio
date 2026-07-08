class Shine {
  constructor(elementSelector, cursorSelector, hoverCursorClass) {
    this.element = document.querySelector(elementSelector);
    this.revealText = this.element.querySelector("span");
    this.cursor = document.querySelector(cursorSelector);
    this.hoverCursorClass = hoverCursorClass;
    this.radius = 0;

    this.element.addEventListener("mouseenter", () => {

        this.cursor.classList.add(this.hoverCursorClass);
        this.revealText.style.opacity = "1";

        gsap.to(this, {
            radius: this.hoverCursorClass === "cursorMstrHover" ? 250 : 150,
            duration: .35,
            ease: "power2.out"
        });

    });

    this.element.addEventListener("mouseleave", () => {

        this.cursor.classList.remove(this.hoverCursorClass);

        gsap.to(this, {
            radius: 0,
            duration: .35,
            ease: "power2.inOut",
            onComplete: () => {
                this.revealText.style.opacity = "0";
            }
        });

    });

    document.body.addEventListener("mousemove", (e) => {
      const rect = this.element.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      // const clipTransition = "clip-path 0.7s ease";
      // this.revealText.style.transition = clipTransition;

      // if (this.hoverCursorClass === "cursorMstrHover") {
      //   setTimeout(() => {
      //     const clipPathValue = `circle(250px at ${offsetX}px ${offsetY}px)`;
      //     this.revealText.style.clipPath = clipPathValue;
      //   }, 50);
      // } else {
      //   setTimeout(() => {
      //   const clipPathValue = `circle(150px at ${offsetX}px ${offsetY}px)`;
      //   this.revealText.style.clipPath = clipPathValue;
      // }, 50);
      // }
        const clipPathValue = `circle(${this.radius}px at ${offsetX}px ${offsetY}px)`;
          this.revealText.style.clipPath = clipPathValue;

      this.cursor.style.left = `${e.clientX}px`;
      this.cursor.style.top = `${e.clientY}px`;
    });
  }
}
window.addEventListener("load", () => {
  const shine1 = new Shine(".shine", ".cursor", "cursorHover");
  const shine2 = new Shine(".mstrRevealText", ".cursor", "cursorMstrHover");
  const shine3 = new Shine(".shine2", ".cursor", "cursorHover");
});


// BLUR THE BORDERS IN IMAGES
document.addEventListener("DOMContentLoaded", function () {
  const faIcons = document.querySelectorAll(".fa, .role");

  faIcons.forEach((faIcon) => {
    faIcon.addEventListener("mouseover", () => {
      const parentBorder = faIcon.closest(".border");
      parentBorder.style.backdropFilter = "blur(5px)";
    });

    faIcon.addEventListener("mouseout", () => {
      const parentBorder = faIcon.closest(".border");
      parentBorder.style.backdropFilter = "none";
    });
  });

});


   // Get the text hero animmation
   const textContainer = document.getElementById('hero-body-text');

   // Split the text into words
   const words = textContainer.textContent.split(' ');
   
   // Clear the content of the text container
   textContainer.textContent = '';
   
   // Create and append span elements for each word with animation properties and spaces
   words.forEach((word, index) => {
     const span = document.createElement('span');
     span.textContent = word;
     span.style.opacity = '0';
     span.style.filter = 'blur(4px)';
     span.style.animation = `fade-in 0.8s ${index * 0.1 + 0.1}s forwards cubic-bezier(0.11, 0, 0.5, 0)`;
     textContainer.appendChild(span);
   
     // Add a space character after each word
     if (index < words.length - 1) {
       const space = document.createTextNode(' ');
       textContainer.appendChild(space);
     }
   });
   
   // Start the animation by adding a class to the text container
   textContainer.classList.add('animate-text');
   
   // Define the fade-in animation using CSS
   const css = `
     @keyframes fade-in {
       100% {
         opacity: 1;
         filter: blur(0);
       }
     }
   
     .animate-text > span {
       animation-duration: 0.3s;
       animation-timing-function: cubic-bezier(0.11, 0, 0.5, 0);
     }
   `;
   
   // Create a style element and add the animation CSS
   const style = document.createElement('style');
   style.appendChild(document.createTextNode(css));
   
   // Add the style element to the document head
   document.head.appendChild(style);
