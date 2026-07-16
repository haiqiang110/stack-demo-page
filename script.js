gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  const scroller = document.querySelector('.scroll-container');
  const viewportHeight = 460;
  const stackGap = 52;

  const card1 = document.querySelector('.card-1');
  const card2 = document.querySelector('.card-2');
  const card3 = document.querySelector('.card-3');
  const card4 = document.querySelector('.card-4');

  gsap.set([card1, card2, card3, card4], { y: viewportHeight });

  const stageHeight = viewportHeight;
  const totalScroll = stageHeight * 4;

  scroller.addEventListener('scroll', () => {
    const scrollTop = scroller.scrollTop;

    const card1Progress = Math.min(Math.max(scrollTop / stageHeight, 0), 1);
    gsap.set(card1, { y: viewportHeight * (1 - card1Progress) });

    const card2Scroll = scrollTop - stageHeight;
    const card2Progress = Math.max(0, Math.min(card2Scroll / stageHeight, 1));
    gsap.set(card2, { y: viewportHeight * (1 - card2Progress) + stackGap });

    const card3Scroll = scrollTop - stageHeight * 2;
    const card3Progress = Math.max(0, Math.min(card3Scroll / stageHeight, 1));
    gsap.set(card3, { y: viewportHeight * (1 - card3Progress) + stackGap * 2 });

    const card4Scroll = scrollTop - stageHeight * 3;
    const card4Progress = Math.max(0, Math.min(card4Scroll / stageHeight, 1));
    gsap.set(card4, { y: viewportHeight * (1 - card4Progress) + stackGap * 3 });
  });
});