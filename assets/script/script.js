// const programRace = document.querySelector('.program-race');
// const programTour = document.querySelector('.program-tour');
// const race = document.querySelector('#race');
// const tour = document.querySelector('#tour');


function showContent(contentId) {
    const allContentBlocks = document.querySelectorAll('.program__container-wrap-tabs');
    allContentBlocks.forEach(block => {
      if (block.id === contentId) {
        block.classList.add('active');
      } else {
        block.classList.remove('active');
      }
    });
  }
