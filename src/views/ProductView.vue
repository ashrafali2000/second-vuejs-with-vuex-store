<template>
  <h1>Products</h1>
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
</template>
<script setup>
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";
import { onMounted, ref } from "vue";
let products = ref([]);
onMounted(async () => {
  let response = await axios.get("https://fakestoreapi.com/products");
  products.value = response.data;
  console.log(products);
});
</script>
