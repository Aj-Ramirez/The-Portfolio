const burgerNav = document.querySelector('.burger-nav');
  const wrapper = document.querySelector('.nav_wrapper');
  const container = document.querySelector('.container');
  const inWrapper = document.querySelector('.in_nav_wrapper');
  let isWrapperVisible = false;

  burgerNav.addEventListener('click', () => {
    if (!isWrapperVisible) {
      wrapper.style.display = 'flex';
      inWrapper.style.display = 'flex';      
      container.style.marginTop = '20vh'; 
      
      setTimeout(() => {
        wrapper.style.top = '0';
        inWrapper.style.top = '0';
      }, 0); // Delay for opacity transition
      setTimeout(() => {
        container.style.filter = 'blur(10px)';
      }, 300); // Delay for opacity transition
    } else {
      wrapper.style.top = '-60vh';
      inWrapper.style.top = '-50vh';
      container.style.marginTop = '0px'; 
      
      setTimeout(() => {
        wrapper.style.display = 'none';
        inWrapper.style.display = 'none';
        container.style.filter = 'blur(0)';
      }, 500); // Delay for display none after opacity transition
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