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
        src="https://ae01.alicdn.com/kf/He97813a9a3bd4e45ac1eb9c329367289s.jpg_640x640Q90.jpg_.webp" /></swiper-slide
    ><swiper-slide
      ><img
        class="h-full"
        src="https://indigostyle.pk/wp-content/uploads/2023/02/PSD4-1.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        class="h-full"
        src="https://cdn11.bigcommerce.com/s-yvpirc28f4/images/stencil/1280x1280/products/1383637/8834974/image_file__23392.1681174537.jpg?c=1&imbypass=on" /></swiper-slide
    ><swiper-slide
      ><img
        class="h-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfLgQIWiSc8IJUuh4r9bLPHjEp_8d1gWzPpFtt76sWyBoKJWqg8WwB-Jw2Wh9Fr8TiGWM&usqp=CAU"
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
