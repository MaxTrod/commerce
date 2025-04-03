import Swiper from 'swiper';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
// import { cursor } from './cursor.js';


function cursor() {
  // const cursorElem = document.querySelector('[data-cursor]');
  // const sliderActive = document.querySelector('.case__slide.swiper-slide-active');
  // const imgBlock = sliderActive.querySelector('.case-item__image-block');
  // console.log(imgBlock);

  // imgBlock.addEventListener("mousemove", function (e) {
  //   const posX = e.clientX;
  //   const posY = e.clientY;
  //   cursorElem.style.left = `${posX}px`;
  //   cursorElem.style.top = `${posY}px`;
  // })
  // imgBlock.addEventListener("mouseenter", function (e) {
  //   cursorElem.style.opacity = `1`;
  //   cursorElem.style.visibility = `visible`;
  //   cursorElem.style.pointerEvents = `auto`;
  // })
  // imgBlock.addEventListener("mouseleave", function (e) {
  //   cursorElem.style.opacity = `0`;
  //   cursorElem.style.visibility = `hidden`;
  //   cursorElem.style.pointerEvents = `none`;
  // })
}



const caseSlider = new Swiper('.case__slider', {
  modules: [Navigation, Pagination, EffectCoverflow],
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  // autoHeight: true,
  spaceBetween: 60,
  // loop: true,
  // centered: true
  // centeredSlides: true
  on: {
    init: function () {

      // cursor();
      // const cursorElem = document.querySelector('[data-cursor]');
      // const sliderActive = document.querySelector('.case__slide.swiper-slide-active');
      // const imgBlock = sliderActive.querySelector('.case-item__image-block');
      // console.log(imgBlock);

      // imgBlock.addEventListener("mousemove", function (e) {
      //   const posX = e.clientX;
      //   const posY = e.clientY;
      //   cursorElem.style.left = `${posX}px`;
      //   cursorElem.style.top = `${posY}px`;
      // })
      // imgBlock.addEventListener("mouseenter", function (e) {
      //   cursorElem.style.opacity = `1`;
      //   cursorElem.style.visibility = `visible`;
      //   cursorElem.style.pointerEvents = `auto`;
      // })
      // imgBlock.addEventListener("mouseleave", function (e) {
      //   cursorElem.style.opacity = `0`;
      //   cursorElem.style.visibility = `hidden`;
      //   cursorElem.style.pointerEvents = `none`;
      // })
        const cursorElem = document.querySelector('[data-cursor]');
  const imgBlock = document.querySelector('.case-item__image-block');
  console.log(imgBlock);

  imgBlock.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorElem.style.left = `${posX}px`;
    cursorElem.style.top = `${posY}px`;
  })
  imgBlock.addEventListener("mouseenter", function (e) {
    cursorElem.style.opacity = `1`;
    cursorElem.style.visibility = `visible`;
    cursorElem.style.pointerEvents = `auto`;
  })
  imgBlock.addEventListener("mouseleave", function (e) {
    cursorElem.style.opacity = `0`;
    cursorElem.style.visibility = `hidden`;
    cursorElem.style.pointerEvents = `none`;
  })

    },
    slideChange: function () {
      // caseSlider.update();
      // caseSlider.updateSlides();
      // caseSlider.updateSlidesClasses();
      // cursor();

      // const cursorElem = document.querySelector('[data-cursor]');
      // const sliderActive = document.querySelector('.case__slide.swiper-slide-active');
      // const imgBlock = sliderActive.querySelector('.case-item__image-block');
      // console.log(imgBlock);

      // imgBlock.addEventListener("mousemove", function (e) {
      //   const posX = e.clientX;
      //   const posY = e.clientY;
      //   cursorElem.style.left = `${posX}px`;
      //   cursorElem.style.top = `${posY}px`;
      // })
      // imgBlock.addEventListener("mouseenter", function (e) {
      //   cursorElem.style.opacity = `1`;
      //   cursorElem.style.visibility = `visible`;
      //   cursorElem.style.pointerEvents = `auto`;
      // })
      // imgBlock.addEventListener("mouseleave", function (e) {
      //   cursorElem.style.opacity = `0`;
      //   cursorElem.style.visibility = `hidden`;
      //   cursorElem.style.pointerEvents = `none`;
      // })
    },
    // realIndexChange: (caseSlider) => console.log(caseSlider.realIndex)
  }
});




const swiperSlides = document.getElementsByClassName('swiper-slide')

caseSlider.on('slideChange', function() {
  const otherSlides = swiperSlides
  for (let index = 0; index < swiperSlides.length; index++) {
    const element = swiperSlides[index];
    const imgBlock = element.querySelector('.case-item__image-block');
    const cursorElem = document.querySelector('[data-cursor]');

    imgBlock.addEventListener("mouseenter", function (e) {
      cursorElem.style.opacity = `0`;
      cursorElem.style.visibility = `hidden`;
      cursorElem.style.pointerEvents = `none`;
    })
  }

  // const linkElemCurrentSlide = swiperSlides[s6.realIndex].getElementsByTagName('a')
  // linkElemCurrentSlide[0].style.display = 'block'
  const imgBlockActive = swiperSlides[caseSlider.realIndex].querySelector('.case-item__image-block');
  const cursorElem = document.querySelector('[data-cursor]');
  imgBlockActive.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorElem.style.left = `${posX}px`;
    cursorElem.style.top = `${posY}px`;
  })
  imgBlockActive.addEventListener("mouseenter", function (e) {
    cursorElem.style.opacity = `1`;
    cursorElem.style.visibility = `visible`;
    cursorElem.style.pointerEvents = `auto`;
  })
  imgBlockActive.addEventListener("mouseleave", function (e) {
    cursorElem.style.opacity = `0`;
    cursorElem.style.visibility = `hidden`;
    cursorElem.style.pointerEvents = `none`;
  })
});



// $('.swiper-slide a').on('click touchstart', function(e) {
//  e.preventDefault();
// });













