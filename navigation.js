const burgerNav = document.querySelector('.burger-nav');
  const wrapper = document.querySelector('.nav_wrapper');
  const container = document.querySelector('.container');
  const inWrapper = document.querySelector('.in_nav_wrapper');
  const target = document.querySelector(".ul_nav_links");
  const target1 = document.querySelector(".ul_social_nav");
  let isWrapperVisible = false;

  burgerNav.addEventListener('click', () => {
    if (!isWrapperVisible) {
        wrapper.style.display = 'flex';
        inWrapper.style.display = 'flex';      
        container.style.marginTop = '20vh'; 
        
        setTimeout(() => {
          wrapper.style.top = '0';
          inWrapper.style.top = '0';
        }, 50); // Delay for opacity transition

        setTimeout(() => {
          container.style.filter = 'blur(10px)';
        }, 300); // Delay for opacity transition
        
        setTimeout(() => {
          target.classList.add("visible");
        }, 500);
        setTimeout(()=>{
          target1.classList.add("visible");
        },800)
        setTimeout(()=>{
          target1.style.overflow = 'unset';
        },1000)

    } else {
      
        setTimeout(() => {
          target.classList.remove("visible");
          target1.classList.remove("visible");
          target1.style.overflow = 'hidden';
        }, 50);

        setTimeout(()=>{
          wrapper.style.top = '-70vh';
          inWrapper.style.top = '-60vh';
          container.style.marginTop = '0px'; 
        },600)
       
        setTimeout(() => {
          wrapper.style.display = 'none';
          inWrapper.style.display = 'none';
          container.style.filter = 'blur(0)';
        }, 1000); // Delay for display none after opacity transition
    }

    isWrapperVisible = !isWrapperVisible;
  });

  burgerNav.classList.add("slide-in-blurred-right");
  setTimeout(() => {
    burgerNav.classList.remove("slide-in-blurred-right");
  }, 2000);


  // function scrollToSection(sectionId) {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }
  
  // function scrollToIntro() {
  //   scrollToSection('introduction');
  // }

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      const body = document.body;
      const offsetTop = section.getBoundingClientRect().top + body.scrollTop;
      const smoothScrollOptions = {
        behavior: 'smooth',
        block: 'start'
      };
      window.scrollTo({
        top: offsetTop,
        ...smoothScrollOptions
      });
    }
  }

  // function scrollToSection(sectionId) {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     gsap.to(window, {
  //       scrollTo: section,
  //       duration: 1,
  //       ease: "power2.inOut"
  //     });
  //   }
  // }

 

  