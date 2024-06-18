<template>
  <div class="flex items-center py-8">
    <span
      class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-1 rounded-full w-full"
    ></span>
    <h2
      class="bg-gradient-to-r from-indigo-500 w-[680px] from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white md:w-[900px] lg:w-6/12 font-bold px-4 md:px-10 py-2 md:py-4 text-xl md:text-3xl rounded-full"
    >
      Latest Products
    </h2>
    <span
      class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-1 rounded-full w-full"
    ></span>
  </div>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-5 md:pb-10"
  >
    <div class="flex flex-col gap-5 justify-center items-center">
      <SwiperSliderLatestProduct1 />
      <div
        class="lg:mt-3 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-bold border border-white rounded-full md:px-6 relative w-40 md:w-56 inline-flex items-center justify-center p-2 md:py-3 overflow-hidden transition duration-300 ease-out shadow-md group"
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
    <div class="flex flex-col gap-5 justify-center items-center">
      <SwiperSliderLatestProduct2 />
      <div
        class="lg:mt-3 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-bold border border-white rounded-full md:px-6 relative w-40 md:w-56 inline-flex items-center justify-center p-2 md:py-3 overflow-hidden transition duration-300 ease-out shadow-md group"
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
    <div class="flex flex-col gap-5 justify-center items-center">
      <SwiperSliderLatestProduct3 />
      <div
        class="lg:mt-3 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-bold border border-white rounded-full md:px-6 relative w-40 md:w-56 inline-flex items-center justify-center p-2 md:py-3 overflow-hidden transition duration-300 ease-out shadow-md group"
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
    <div class="flex flex-col gap-5 justify-center items-center">
      <SwiperSliderLatestProduct4 />
      <div
        class="lg:mt-3 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-bold border border-white rounded-full md:px-6 relative w-40 md:w-56 inline-flex items-center justify-center p-2 md:py-3 overflow-hidden transition duration-300 ease-out shadow-md group"
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
    <div class="flex flex-col gap-5 justify-center items-center">
      <SwiperSliderLatestProduct5 />
      <div
        class="lg:mt-3 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-bold border border-white rounded-full md:px-6 relative w-40 md:w-56 inline-flex items-center justify-center p-2 md:py-3 overflow-hidden transition duration-300 ease-out shadow-md group"
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
    <div class="flex flex-col gap-5 justify-center items-center">
      <SwiperSliderLatestProduct6 />
      <div
        class="lg:mt-3 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-bold border border-white rounded-full md:px-6 relative w-40 md:w-56 inline-flex items-center justify-center p-2 md:py-3 overflow-hidden transition duration-300 ease-out shadow-md group"
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
</template>
<script setup>
import SwiperSliderLatestProduct1 from "./SwiperSliderLatestProduct1.vue";
import SwiperSliderLatestProduct2 from "./SwiperSliderLatestProduct2.vue";
import SwiperSliderLatestProduct3 from "./SwiperSliderLatestProduct3.vue";
import SwiperSliderLatestProduct4 from "./SwiperSliderLatestProduct4.vue";
import SwiperSliderLatestProduct5 from "./SwiperSliderLatestProduct5.vue";
import SwiperSliderLatestProduct6 from "./SwiperSliderLatestProduct6.vue";
</script>
