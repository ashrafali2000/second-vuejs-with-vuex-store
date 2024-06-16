<template>
  <!-- <div class="relative"> -->
  <swiper
    :effect="'cube'"
    :grabCursor="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :loop="true"
    :speed="3000"
    :cubeEffect="{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }"
    :modules="modules"
    class="absolute !h-52 !w-48 md:!w-72 md:!h-72 lg:!w-80 lg:!h-80 mx-auto"
  >
    <swiper-slide class=""
      ><img
        class="h-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP8-wDpolTMp02looSdCoNk9IAjfRGRitV5Q&s" /></swiper-slide
    ><swiper-slide
      ><img
        class="h-full"
        src="https://m.media-amazon.com/images/I/41WFSKyNyxL._SL500_.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        class="h-full"
        src="https://image.made-in-china.com/202f0j00oGiqQYRMahky/Latest-Children-Rabbit-Ears-Computer-Gaming-Headset-Wired-Lighting-Wireless-Mic-Headphones-for-xBox-Girls.webp" /></swiper-slide
    ><swiper-slide
      ><img
        class="h-full"
        src="https://static-01.daraz.pk/p/23f1d74b719f70bf5206958dcaed7f51.jpg"
    /></swiper-slide>
  </swiper>
  <!-- </div> -->
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCube, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, EffectCube, Pagination],
    };
  },
};
</script>
