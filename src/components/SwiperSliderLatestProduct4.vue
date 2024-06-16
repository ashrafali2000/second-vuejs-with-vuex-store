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
        src="https://m.media-amazon.com/images/I/81j2-V+gVYL._AC_UY300_.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        class="h-full"
        src="https://i.pinimg.com/564x/a8/97/05/a897055f24797f112651f39c82bf939b.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        class="h-full"
        src="https://tiimg.tistatic.com/fp/1/005/268/pure-gold-necklace-set-867.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        class="h-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxWgasoFVyxuePxbKF0GBPR4CY2Zu07Nqlx-nEzSsLpiWHFK0wgpDwcU-LRVoOp701kTc&usqp=CAU"
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
