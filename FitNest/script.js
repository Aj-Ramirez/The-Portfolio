/*====================================================

FITNEST HERO

====================================================*/

const header = document.querySelector(".hero-header");
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".hero-nav");
const navLinks = document.querySelectorAll(".hero-nav a");
const heroImage = document.querySelector(".hero-image img");

/*====================================================

Sticky Header

====================================================*/

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.scrollY;

    if(currentScroll > 60){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

    if(currentScroll > lastScroll && currentScroll > 150){

        header.style.transform = "translate(-50%, 5%)";

    }else{

        header.style.transform = "translate(-50%, 0)";

    }

    lastScroll = currentScroll;

});

/*====================================================

Mobile Menu

====================================================*/

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    menuBtn.classList.toggle("active");

});

/*====================================================

Close Mobile Menu

====================================================*/

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

        menuBtn.classList.remove("active");

    });

});

/*====================================================

Parallax Hero Image

====================================================*/

const hero = document.querySelector("#hero");

hero.addEventListener("mousemove",(e)=>{

    const x = (e.clientX / window.innerWidth - .5) * 20;
    const y = (e.clientY / window.innerHeight - .5) * 20;

    heroImage.style.transform =
        `translate(${x}px, ${y}px) scale(1.03)`;

});

hero.addEventListener("mouseleave",()=>{

    heroImage.style.transform =
        "translate(0,0) scale(1)";

});

/*====================================================

Hero Reveal

====================================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});



// const menuBtn = document.querySelector(".menu-btn");
// const nav = document.querySelector(".hero-nav");

// menuBtn.addEventListener("click", function(){

//     nav.classList.toggle("active");

// });



/* ==========================================
   FITNEST INTRO LOADER
========================================== */

const intro = document.getElementById("intro");
const website = document.getElementById("website");

window.addEventListener("load", () => {

    // Hide website while intro is playing
    website.classList.remove("show");

    // Play intro for 3 seconds
    setTimeout(() => {

        intro.classList.add("hide");
        website.classList.add("show");

        // Remove intro after fade animation
        setTimeout(() => {
            intro.remove();
        }, 1000);

    }, 3000);

});

// const intro = document.getElementById("intro");
// const website = document.getElementById("website");

// window.addEventListener("load", () => {

//     // Skip intro if already played
//     if (sessionStorage.getItem("fitnestLoader")) {

//         intro.remove();
//         website.classList.add("show");

//         return;
//     }

//     // Hide website while intro is playing
//     website.classList.remove("show");

//     // Play intro for 3 seconds
//     setTimeout(() => {

//         intro.classList.add("hide");
//         website.classList.add("show");

//         // Remove intro after fade animation
//         setTimeout(() => {

//             intro.remove();

//             sessionStorage.setItem("fitnestLoader", "true");

//         }, 1000);

//     }, 3000);

// });  