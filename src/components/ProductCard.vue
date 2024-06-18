<template>
  <div>
    <div
      class="w-full max-w-[150px] md:max-w-[300px] border rounded-lg shadow bg-gray-800 border-gray-700"
    >
      <a href="#" class="">
        <img
          class="pt-4 pb-2 px-4 md:p-6 lg:p-8 rounded-t-lg h-36 md:h-60 lg:h-80 w-full"
          :src="image"
          alt="product image"
        />
      </a>
      <div class="px-3 md:px-5 pb-3 md:pb-5">
        <h5
          class="text-sm md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          {{ category }}
        </h5>

        <div class="flex items-center mt-1.5 md:mt-2.5 mb-2 md:mb-5">
          <div class="flex items-center space-x-1 rtl:space-x-reverse">
            <svg
              class="w-3 h-3 md:w-4 md:h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
            <svg
              class="w-3 h-3 md:w-4 md:h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
            <svg
              class="w-3 h-3 md:w-4 md:h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
            <svg
              class="hidden lg:block w-3 h-3 md:w-4 md:h-4 text-yellow-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
            <svg
              class="w-3 h-3 md:w-4 md:h-4 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              />
            </svg>
          </div>
          <span
            class="bg-blue-100 hidden md:block text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3"
            >5.0</span
          >
          <p
            @click="openModal"
            class="pl-3 text-xs md:text-base md:pl-6 lg:pl-10 text-indigo-400 cursor-pointer hover:underline"
          >
            Details
          </p>
        </div>
        <div class="flex items-center justify-between">
          <span
            class="text-sm md:text-xl lg:text-3xl font-bold text-gray-900 dark:text-white"
            >${{ price }}</span
          >
          <span
            @click="addToCartHandler(title)"
            class="cursor-pointer bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-pink-500 hover:to-yellow-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[10px] md:text-sm px-1 py-1 md:px-5 md:py-2.5 text-center"
            >Add to cart</span
          >
        </div>
      </div>
    </div>
    <Modal
      :open="open"
      :closeModal="closeModal"
      :description="description"
      :title="title"
      :image="image"
    />
  </div>
</template>
<script setup>
defineProps({
  category: String,
  title: String,
  description: String,
  image: String,
  price: Number,
  rating: Object,
  addToCartHandler: Function,
});
import Modal from "./Modal.vue";
import { ref } from "vue";
const open = ref(false);
const openModal = () => {
  open.value = true;
};
const closeModal = () => {
  open.value = false;
};
</script>
