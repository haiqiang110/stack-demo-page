gsap.registerPlugin(ScrollTrigger);

const scroller = document.querySelector('.scroll-container');
const viewportHeight = 460;
const stackGap = 52;

const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');
const card3 = document.querySelector('.card-3');
const card4 = document.querySelector('.card-4');

gsap.set([card1, card2, card3, card4], { y: viewportHeight });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.spacer',
    scroller: scroller,
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
  },
});

tl.to(card1, { y: 0, ease: 'none', duration: 1 }, 0)
  .to(card2, { y: stackGap, ease: 'none', duration: 1 }, 1)
  .to(card3, { y: stackGap * 2, ease: 'none', duration: 1 }, 2)
  .to(card4, { y: stackGap * 3, ease: 'none', duration: 1 }, 3);