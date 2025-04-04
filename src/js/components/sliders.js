import Swiper from 'swiper';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
// import { cursor } from './cursor.js';


const caseSlider = new Swiper('.case__slider', {
  modules: [Navigation, Pagination, EffectCoverflow],
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  // autoHeight: true,
  spaceBetween: 60,
  allowTouchMove: false,
  // loop: true,
  // centered: true
  // centeredSlides: true
  navigation: {
    nextEl: '.case__next',
    prevEl: '.case__prev',
  },
  on: {
    init: function () {
    const cursorElem = document.querySelector('[data-cursor]');
    const imgBlock = document.querySelector('.case-item__image-block');
    const btnNext = document.querySelector('.case__next');
    const btnPrev = document.querySelector('.case__prev');


    imgBlock.addEventListener("mousemove", function (e) {
      const posX = e.clientX;
      const posY = e.clientY;
      // cursorElem.style.left = `${posX}px`;
      // cursorElem.style.top = `${posY}px`;
      cursorElem.style.left = `calc(${posX}px - 59px)`;
      cursorElem.style.top = `calc(${posY}px - 59px)`;
    })
    imgBlock.addEventListener("mouseenter", function (e) {
      cursorElem.style.opacity = `1`;
      cursorElem.style.visibility = `visible`;
    })
    imgBlock.addEventListener("mouseleave", function (e) {
      cursorElem.style.opacity = `0`;
      cursorElem.style.visibility = `hidden`;
    })

    btnNext.addEventListener("mousemove", function (e) {
      const posX = e.clientX;
      const posY = e.clientY;
      // cursorElem.style.left = `${posX}px`;
      // cursorElem.style.top = `${posY}px`;
      cursorElem.style.left = `calc(${posX}px - 59px)`;
      cursorElem.style.top = `calc(${posY}px - 59px)`;
    })
    btnNext.addEventListener("mouseenter", function (e) {
      cursorElem.style.opacity = `1`;
      cursorElem.style.visibility = `visible`;
    })
    btnNext.addEventListener("mouseleave", function (e) {
      cursorElem.style.opacity = `0`;
      cursorElem.style.visibility = `hidden`;
    })

    btnPrev.addEventListener("mousemove", function (e) {
      const posX = e.clientX;
      const posY = e.clientY;
      // cursorElem.style.left = `${posX}px`;
      // cursorElem.style.top = `${posY}px`;
      cursorElem.style.left = `calc(${posX}px - 59px)`;
      cursorElem.style.top = `calc(${posY}px - 59px)`;
    })
    btnPrev.addEventListener("mouseenter", function (e) {
      cursorElem.style.opacity = `1`;
      cursorElem.style.visibility = `visible`;
      cursorElem.classList.add('rotate-arrow');
    })
    btnPrev.addEventListener("mouseleave", function (e) {
      cursorElem.style.opacity = `0`;
      cursorElem.style.visibility = `hidden`;
      cursorElem.classList.remove('rotate-arrow');
    })

    },

    slideChange: function () {
    },
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
    })
  }

  const imgBlockActive = swiperSlides[caseSlider.realIndex].querySelector('.case-item__image-block');
  const cursorElem = document.querySelector('[data-cursor]');
  imgBlockActive.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorElem.style.left = `calc(${posX}px - 59px)`;
    cursorElem.style.top = `calc(${posY}px - 59px)`;
  })
  imgBlockActive.addEventListener("mouseenter", function (e) {
    cursorElem.style.opacity = `1`;
    cursorElem.style.visibility = `visible`;
  })
  imgBlockActive.addEventListener("mouseleave", function (e) {
    cursorElem.style.opacity = `0`;
    cursorElem.style.visibility = `hidden`;
  })
});

















