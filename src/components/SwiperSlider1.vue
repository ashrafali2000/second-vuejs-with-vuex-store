<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :speed="600"
    :parallax="true"
    :navigation="true"
    :modules="modules"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
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

    <swiper-slide class="px-3 py-8 md:py-10 md:px-16">
      <div class="grid grid-cols-1 md:grid-cols-2 text-white">
        <div class="order-2 md:order-1">
          <div class="mt-3 text-xl md:text-4xl">Mobile Phone</div>
          <div class="pt-2 md:pt-6 text-lg md:text-2xl">mens and womens</div>

          <div class="text-sm md:text-base">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla,
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            </p>

            <div
              class="mt-4 lg:mt-8 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-bold border border-white rounded-full md:px-6 relative w-40 md:w-56 inline-flex items-center justify-center p-2 md:py-3 overflow-hidden transition duration-300 ease-out shadow-md group"
            >
              <span
                class="absolute cursor-pointer inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 group-hover:translate-x-0 ease rounded-full"
              >
                <span class="font-bold text-sm md:text-xl pr-3">Start</span>
                <svg
                  class="w-4 h-4 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <div className="flex justify-center items-center">
                <span
                  class="absolute text-sm md:text-xl flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease"
                >
                  Buy Now
                </span>
                <span class="relative invisible"> Buy Now </span>
              </div>
            </div>
          </div>
        </div>
        <div class="order-1 md:order-2">
          <img
            :src="'https://imageio.forbes.com/specials-images/imageserve/61055552b6d96ce71cdff7be/Apple-iPhone-13--iPhone-13-Pro--iPhone-13-Pro-Max--iPhone-13-Mini--new-iPhone/0x0.jpg?crop=831,468,x0,y0,safe&height=400&width=711&fit=bounds'"
            class="h-44 md:h-64 lg:h-96 w-full"
          />
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="px-3 py-8 md:py-10 md:px-16">
      <div class="grid grid-cols-1 md:grid-cols-2 text-white">
        <div class="order-2 md:order-1">
          <div class="mt-3 text-xl md:text-4xl">Hand Watches</div>
          <div class="pt-2 md:pt-6 text-lg md:text-2xl">mens and womens</div>

          <div class="text-sm md:text-base">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla,
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            </p>
            <div
              class="mt-4 lg:mt-8 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-bold border border-white rounded-full md:px-6 relative w-40 md:w-56 inline-flex items-center justify-center p-2 md:py-3 overflow-hidden transition duration-300 ease-out shadow-md group"
            >
              <span
                class="absolute cursor-pointer inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 group-hover:translate-x-0 ease"
              >
                <span class="font-bold text-sm md:text-xl pr-3">Start</span>
                <svg
                  class="w-4 h-4 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <div className="flex justify-center items-center">
                <span
                  class="absolute text-sm md:text-xl flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease"
                >
                  Buy Now
                </span>
                <span class="relative invisible"> Buy Now </span>
              </div>
            </div>
          </div>
        </div>
        <div class="order-1 md:order-2">
          <img
            :src="'https://static.toiimg.com/thumb/msid-98015126,width-1280,height-720,resizemode-4/98015126.jpg'"
            class="h-44 md:h-64 lg:h-96 w-full"
          />
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="px-3 py-8 md:py-10 md:px-16">
      <div class="grid grid-cols-1 md:grid-cols-2 text-white">
        <div class="order-2 md:order-1">
          <div class="mt-3 text-xl md:text-4xl">Shoes</div>
          <div class="pt-2 md:pt-6 text-lg md:text-2xl">mens and womens</div>

          <div class="text-sm md:text-base">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla,
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            </p>
            <div
              class="mt-4 lg:mt-8 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-bold border border-white rounded-full md:px-6 relative w-40 md:w-56 inline-flex items-center justify-center p-2 md:py-3 overflow-hidden transition duration-300 ease-out shadow-md group"
            >
              <span
                class="absolute cursor-pointer inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 group-hover:translate-x-0 ease"
              >
                <span class="font-bold text-sm md:text-xl pr-3">Start</span>
                <svg
                  class="w-4 h-4 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <div className="flex justify-center items-center">
                <span
                  class="absolute text-sm md:text-xl flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease"
                >
                  Buy Now
                </span>
                <span class="relative invisible"> Buy Now </span>
              </div>
            </div>
          </div>
        </div>
        <div class="order-1 md:order-2">
          <img
            :src="'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.jpg?s=612x612&w=0&k=20&c=A3w_a9q3Gz-tWkQL6K00xu7UHdN5LLZefzPDp-wNkSU='"
            class="h-44 md:h-64 lg:h-96 w-full"
          />
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
