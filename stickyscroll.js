if($(window).width() > 767){
     var containerHeight = $('.right-side-wrapper').height() - $('.sticky-portion').height(); // Animation duration or time
   
     gsap.timeline({
       scrollTrigger: {
         trigger: $('.sticky-portion'),
         start: "top 10px",
         pin: true,
         scrub: 1.4,
         end: containerHeight
       },
     });
   }
   