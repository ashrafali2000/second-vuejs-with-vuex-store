<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :speed="600"
    :parallax="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <div
      slot="container-start"
      class="parallax-bg"
      :style="{
        // 'background-image':
        //   'url(https://swiperjs.com/demos/images/nature-1.jpg)',
      }"
      data-swiper-parallax="-23%"
    ></div>

    <swiper-slide>
      <div class="flex">
        <div>
          <div class="title" data-swiper-parallax="-300">Slide 2</div>
          <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>

          <div class="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            </p>
            <button
              class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-bold border border-white rounded-full p-3"
            >
              Buy Now
            </button>
          </div>
        </div>
        <div class="">
          <img :src="'heroSliderimg2.jpg'" class="h-96 w-[700px]" />
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="flex">
        <div>
          <div class="title" data-swiper-parallax="-300">Slide 2</div>
          <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>

          <div class="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            </p>
            <button
              class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-bold border border-white rounded-full p-3"
            >
              Buy Now
            </button>
          </div>
        </div>
        <div class="">
          <img
            :src="'https://m.media-amazon.com/images/I/711IEZNcPaL.jpg'"
            class="h-96 w-[500px]"
          />
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="flex">
        <div>
          <div class="title" data-swiper-parallax="-300">Slide 3</div>
          <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>

          <div class="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            </p>
            <button
              class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-bold border border-white rounded-full p-3"
            >
              Buy Now
            </button>
          </div>
        </div>
        <div class="">
          <img :src="'heroSliderimg1.jpg'" class="h-96 w-[700px]" />
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiperSlider1.css";

// import required modules
import { Parallax, Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Parallax, Autoplay, Pagination, Navigation],
    };
  },
};
</script>
