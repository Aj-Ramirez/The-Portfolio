// window.addEventListener("load", function () {
//      let shine = document.querySelector(".shine");
//      let revealText = document.querySelector(".shine span");
//      let c = document.querySelector(".cursor");
   
//      shine.addEventListener("mouseenter", () => {
//        c.classList.add("cursorHover"); // Add the class on hover
//        revealText.style.opacity = "1"; // Make the text visible when hovered
//      });
   
//      shine.addEventListener("mouseleave", () => {
//        c.classList.remove("cursorHover"); // Remove the class when leaving
//        revealText.style.opacity = "0"; // Hide the text when not hovered
//      });
   
//      document.body.onmousemove = function (e) {
//        var rect = shine.getBoundingClientRect();
//        const offsetX = e.clientX - rect.left;
//        const offsetY = e.clientY - rect.top;
   
//        setTimeout(() => {
//          const clipPathValue = `circle(100px at ${offsetX}px ${offsetY}px)`;
//          revealText.style.clipPath = clipPathValue;
//        }, 50);
   
//        c.style.left = `${e.clientX}px`;
//        c.style.top = `${e.clientY}px`;
//      };
//    });

// class Shine {
//   constructor(elementSelector, cursorSelector) {
//     this.element = document.querySelector(elementSelector);
//     this.revealText = this.element.querySelector("span");
//     this.cursor = document.querySelector(cursorSelector);

//     this.element.addEventListener("mouseenter", () => {
//       this.cursor.classList.add("cursorHover");
//       this.revealText.style.opacity = "1";
//     });

//     this.element.addEventListener("mouseleave", () => {
//       this.cursor.classList.remove("cursorHover");
//       this.revealText.style.opacity = "0";
//     });

//     document.body.addEventListener("mousemove", (e) => {
//       const rect = this.element.getBoundingClientRect();
//       const offsetX = e.clientX - rect.left;
//       const offsetY = e.clientY - rect.top;

//       setTimeout(() => {
//         const clipPathValue = `circle(100px at ${offsetX}px ${offsetY}px)`;
//         this.revealText.style.clipPath = clipPathValue;
//       }, 50);

//       this.cursor.style.left = `${e.clientX}px`;
//       this.cursor.style.top = `${e.clientY}px`;
//     });
//   }
// }

// window.addEventListener("load", () => {
//   const shine1 = new Shine(".shine", ".cursor");
//   const shine2 = new Shine(".mstrRevealText", ".cursor");
//   const shine3 = new Shine(".mstrRevealText1", ".cursor");
// });

class Shine {
  constructor(elementSelector, cursorSelector, hoverCursorClass) {
    this.element = document.querySelector(elementSelector);
    this.revealText = this.element.querySelector("span");
    this.cursor = document.querySelector(cursorSelector);
    this.hoverCursorClass = hoverCursorClass;

    this.element.addEventListener("mouseenter", () => {
      this.cursor.classList.add(this.hoverCursorClass);
      this.revealText.style.opacity = "1";
    });

    this.element.addEventListener("mouseleave", () => {
      this.cursor.classList.remove(this.hoverCursorClass);
      this.revealText.style.opacity = "0";
    });

    document.body.addEventListener("mousemove", (e) => {
      const rect = this.element.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      // const clipTransition = "clip-path 0.7s ease";
      // this.revealText.style.transition = clipTransition;

      if (this.hoverCursorClass === "cursorMstrHover") {
        setTimeout(() => {
          const clipPathValue = `circle(250px at ${offsetX}px ${offsetY}px)`;
          this.revealText.style.clipPath = clipPathValue;
        }, 50);
      } else {
        setTimeout(() => {
        const clipPathValue = `circle(150px at ${offsetX}px ${offsetY}px)`;
        this.revealText.style.clipPath = clipPathValue;
      }, 50);
      }

      this.cursor.style.left = `${e.clientX}px`;
      this.cursor.style.top = `${e.clientY}px`;
    });
  }
}
window.addEventListener("load", () => {
  const shine1 = new Shine(".shine", ".cursor", "cursorHover");
  const shine2 = new Shine(".mstrRevealText", ".cursor", "cursorMstrHover");
});


// BLUR THE BORDERS IN IMAGES
document.addEventListener("DOMContentLoaded", function () {
  const faIcons = document.querySelectorAll(".fa");

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

// CLICK TRANSITIONING CARDS
  // const cards = document.querySelectorAll(".card")

  // cards.forEach((card) => {
  //   card.addEventListener("mousedown", ()=>{
  //     card.style.transform = "scale(1.95)";
  //     card.style.transition = "transform 0.1s ease";
  //   })
  //   card.addEventListener("mouseup", () => {
  //     card.style.transform = "scale(2)";
  //     card.style.transition = "transform 0.2s ease";
  //   });
  // })

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
       animation-duration: 1s;
       animation-timing-function: cubic-bezier(0.11, 0, 0.5, 0);
     }
   `;
   
   // Create a style element and add the animation CSS
   const style = document.createElement('style');
   style.appendChild(document.createTextNode(css));
   
   // Add the style element to the document head
   document.head.appendChild(style);
