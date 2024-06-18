<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="bg-purple-200">
    <NavBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>
