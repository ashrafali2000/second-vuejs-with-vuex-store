<template>
  <div>
    <div
      class="flex flex-wrap lg:flex-nowrap justify-around pb-4 gap-2 md:gap-4 lg:gap-0 mx-auto py-3 px-3 md:px-0"
    >
      <div
        class="flex gap-2 md:gap-3 flex-wrap md:flex-nowrap items-center justify-center"
      >
        <button
          @click="onAllProductsHandler"
          class="bg-gradient-to-r text-white text-sm md:text-base py-1 md:py-2 font-semibold cursor-pointer px-3 rounded-full from-blue-600 from-10% via-sky-400 via-30% to-green-500 to-90%"
        >
          All Products
        </button>
        <button
          @click="onMenHandler"
          class="bg-gradient-to-r text-white text-sm md:text-base py-1 md:py-2 font-semibold cursor-pointer px-3 rounded-full from-blue-600 from-10% via-sky-400 via-30% to-green-500 to-90%"
        >
          Men
        </button>
        <button
          @click="onWomenHandler"
          class="bg-gradient-to-r text-white text-sm md:text-base py-1 md:py-2 font-semibold cursor-pointer px-3 rounded-full from-blue-600 from-10% via-sky-400 via-30% to-green-500 to-90%"
        >
          Women
        </button>
        <button
          @click="onJeweleryHandler"
          class="bg-gradient-to-r text-white text-sm md:text-base py-1 md:py-2 font-semibold cursor-pointer px-3 rounded-full from-blue-600 from-10% via-sky-400 via-30% to-green-500 to-90%"
        >
          Jewelery
        </button>
        <button
          @click="onElectronicHandler"
          class="bg-gradient-to-r text-white text-sm md:text-base py-1 md:py-2 font-semibold cursor-pointer px-3 rounded-full from-blue-600 from-10% via-sky-400 via-30% to-green-500 to-90%"
        >
          Electronic
        </button>
      </div>
      <form @submit.prevent="searchHandler" class="w-full md:w-5/6 lg:w-3/6">
        <div class="relative">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            v-model="search"
            v-on:keyup="enterSearchHandler"
            class="block w-full p-4 ps-10 text-sm border rounded-lg dark:bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search product..."
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 hover:from-pink-500 hover:to-yellow-500"
          >
            Search
          </button>
        </div>
      </form>
    </div>
    <!-- loader -->
    <div class="flex justify-center pt-5">
      <!-- loader -->
      <div
        v-if="loader"
        aria-label="Loading..."
        role="status"
        class="flex items-center space-x-2 h-screen justify-center -mt-32"
      >
        <svg
          class="h-20 w-20 animate-spin stroke-sky-500"
          viewBox="0 0 256 256"
        >
          <line
            x1="128"
            y1="32"
            x2="128"
            y2="64"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="195.9"
            y1="60.1"
            x2="173.3"
            y2="82.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="224"
            y1="128"
            x2="192"
            y2="128"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="195.9"
            y1="195.9"
            x2="173.3"
            y2="173.3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="128"
            y1="224"
            x2="128"
            y2="192"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="60.1"
            y1="195.9"
            x2="82.7"
            y2="173.3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="32"
            y1="128"
            x2="64"
            y2="128"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="60.1"
            y1="60.1"
            x2="82.7"
            y2="82.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
        </svg>
        <span class="text-4xl font-medium text-sky-500">Loading...</span>
      </div>
      <div
        v-else
        class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10 px-3 lg:px-5"
      >
        <div v-for="product in products">
          <ProductCard
            :category="product.category"
            :title="product.title"
            :description="product.description"
            :image="product.image"
            :price="product.price"
            :rating="product.rating"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";
import { onMounted, ref } from "vue";
let products = ref([]);
let loader = ref(true);
let search = ref("");
onMounted(async () => {
  let response = await axios.get("https://fakestoreapi.com/products");
  products.value = response.data;
  loader.value = false;
});

const searchHandler = () => {
  if (search.value === "Men" || search.value === "men") {
    onMenHandler();
  } else if (search.value === "Women" || search.value === "women") {
    onWomenHandler();
  } else if (search.value === "Jewelery" || search.value === "jewelery") {
    onJeweleryHandler();
  } else if (search.value === "Electronic" || search.value === "electronic") {
    onElectronicHandler();
  } else if (
    search.value === "All Products" ||
    search.value === "all products"
  ) {
    onAllProductsHandler();
  }
};
const enterSearchHandler = (e) => {
  if (e.key == "Enter") {
    if (search.value === "Men" || search.value === "men") {
      onMenHandler();
    } else if (search.value === "Women" || search.value === "women") {
      onWomenHandler();
    } else if (search.value === "Jewelery" || search.value === "jewelery") {
      onJeweleryHandler();
    } else if (search.value === "Electronic" || search.value === "electronic") {
      onElectronicHandler();
    } else if (
      search.value === "All Products" ||
      search.value === "all products"
    ) {
      onAllProductsHandler();
    }
  }
};
const onAllProductsHandler = async () => {
  loader.value = true;
  let response = await axios.get("https://fakestoreapi.com/products");
  products.value = response.data;
  loader.value = false;
};
const onJeweleryHandler = async () => {
  loader.value = true;
  let response = await axios.get(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  products.value = response.data;
  loader.value = false;
};
const onMenHandler = async () => {
  loader.value = true;
  let response = await axios.get(
    "https://fakestoreapi.com/products/category/men's clothing"
  );
  products.value = response.data;
  loader.value = false;
};
const onWomenHandler = async () => {
  loader.value = true;
  let response = await axios.get(
    "https://fakestoreapi.com/products/category/women's clothing"
  );
  products.value = response.data;
  loader.value = false;
};
const onElectronicHandler = async () => {
  loader.value = true;
  let response = await axios.get(
    "https://fakestoreapi.com/products/category/electronics"
  );
  products.value = response.data;
  loader.value = false;
};
</script>
