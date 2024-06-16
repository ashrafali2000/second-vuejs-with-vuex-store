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
        src="https://a.1stdibscdn.com/vintage-sapphire-and-diamond-halo-ring-in-14k-yellow-gold-for-sale/j_10283/j_197309421688159208789/j_19730942_1688159209717_bg_processed.jpg?width=768" /></swiper-slide
    ><swiper-slide
      ><img
        class="h-full"
        src="https://puregold.pk/wp-content/uploads/LR00123-1.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        class="h-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQwoxPQ5f-CSosmG_kZJErkkuPEtEekGLj1dXTnEJ-DMXnHfAhUXQYe2MCXPF-2Sglg8&usqp=CAU" /></swiper-slide
    ><swiper-slide
      ><img
        class="h-full"
        src="https://i5.walmartimages.com/seo/Genuine-0-5ctw-Round-Cut-Diamond-Ladies-3Stone-Fancy-Engagement-Anniversary-Ring-Solid-10K-Rose-White-or-Yellow-Gold-GH-I1-I2_29277a39-cb70-45ea-a46f-b7a246bd89ce_1.ce622adadb57d26d1b46ce4e99dcbb0c.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
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
