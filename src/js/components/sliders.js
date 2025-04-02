import Swiper from 'swiper';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

const caseSlider = new Swiper('.case__slider', {
  modules: [Navigation, Pagination, EffectCoverflow],
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  // autoHeight: true,
  // spaceBetween: 60,
  centeredSlides: true
});
