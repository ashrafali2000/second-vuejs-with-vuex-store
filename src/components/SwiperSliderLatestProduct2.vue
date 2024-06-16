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
        src="https://bestonline.pk/cdn/shop/files/WhatsAppImage2023-11-22at23.43.51_e5fa46c0.jpg?v=1700773430" /></swiper-slide
    ><swiper-slide
      ><img
        class="h-full"
        src="https://oneclickshopping.pk/wp-content/uploads/2022/04/Untitled-1-100.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        class="h-full"
        src="https://media.istockphoto.com/id/509464671/photo/smart-watch.jpg?s=612x612&w=0&k=20&c=RDYfeSMutwJ778pweCYQwIvFKAcNCni5_m5B-iLkDZs=" /></swiper-slide
    ><swiper-slide
      ><img
        class="h-full"
        src="https://static-01.daraz.lk/p/a6ec04364e8e1eeb27c238d4bdd992e9.jpg"
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
