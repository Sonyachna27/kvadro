const menuBtn = document.querySelector('.menuBtns');
const htmlElement = document.querySelector('html');
const navLinks = document.querySelectorAll('nav a');
  menuBtn.addEventListener('click' , () => document.querySelector('html').classList.toggle('open'));
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
        htmlElement.classList.remove('open');
    });
});
    const loadMoreButton = document.getElementById("loadMore");
   
    function hideInitialTabs(container) {
        const tabs = container.querySelectorAll(".program__container-wrap-tabs-tab");
        for (let i = 3; i < tabs.length; i++) {
            tabs[i].style.display = "none";
        }
    }
    function showContent(contentId) {
        const allContentBlocks = document.querySelectorAll('.program__container-wrap-tabs');
        
        const tabsBtns = document.querySelectorAll('.program-race');

tabsBtns.forEach((button) => {
  button.addEventListener('click', () => {
    tabsBtns.forEach((otherButton) => {
      otherButton.classList.remove('active');
    });

    button.classList.add('active');
  });
});

        allContentBlocks.forEach(block => {
            if (block.id === contentId) {

                block.classList.add('active');
                hideInitialTabs(block); 
                let count = 3;
                const tabs = block.querySelectorAll(".program__container-wrap-tabs-tab");
                loadMoreButton.addEventListener("click", function(e) {
                    e.preventDefault();
                    tabs.forEach(function(tab, index) {
                        if (index >= count && index < count + 3) {
                            tab.style.display = "grid";
                            tab.style.height = "auto";
                        }
                    });
                    count += 3;
                });
            } else {
                block.classList.remove('active');
            }
        });
    }
    showContent("race");
    
    var swiper = new Swiper(".mySwiper1", {
        slidesPerView: 1,
  spaceBetween: 40,

  breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      990: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1023: {
        slidesPerView: 3,
        spaceBetween: 40
      }
  },
  mousewheel: {
    invert: true,
  },
  loop: true,
      });
      
    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    990: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
  mousewheel: {
    invert: true,
  },
  loop: true,
      });

      document.addEventListener("DOMContentLoaded", function() {
        const images = document.querySelectorAll(".gallery__container-wrap-image");
        const loadMoreButton = document.getElementById("galleryLoadMore");
        let displayedCount = 5;
      
        images.forEach(function(image, index) {
          if (index >= displayedCount) {
            image.style.display = "none";
          }
        });
      
        loadMoreButton.addEventListener("click", function(e) {
          e.preventDefault();
          images.forEach(function(image, index) {
            if (index >= displayedCount && index < displayedCount + 3) {
                image.style.display = "block";
                image.style.height = "auto"; 
            }
          });
          displayedCount += 3; 
        });
    });
    
    let stat = document.getElementsByClassName('stat-value');

let zeroValues = () => {
  for (let i = 0; i < stat.length; i++) {
    stat[i].innerHTML = 0;
  }
}

let numScroll = () => {
  const animationDuration = 2000;
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(animationDuration / frameDuration);
  const easeOutQuad = t => t * (2 - t);
  
  const animateCountUp = el => {
    let frame = 0;
    const countTo = parseInt(el.dataset.target.replace(/,/g, ''), 10);
    
    const counter = setInterval(() => {
      frame++; 
      const progress = easeOutQuad(frame / totalFrames);
      const currentCount = Math.round(countTo * progress);
      
      if (parseInt(el.innerHTML, 10) !== currentCount) {
        el.innerHTML = currentCount;
      }
      
      if (frame === totalFrames) {
        clearInterval(counter);
        el.innerHTML = el.dataset.target;
      }
    }, frameDuration);
  }
  
  const runAnimations = () => {
    const countupEls = document.querySelectorAll('.stat-value');
    countupEls.forEach(animateCountUp);
  }
  
  runAnimations();
}

window.addEventListener('load', () => {
  zeroValues();
  numScroll();
});
