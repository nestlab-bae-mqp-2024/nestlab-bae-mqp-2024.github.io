
<template>
  <!-- Navigation Island -->
  <div class="p-5"></div>
  <div class="container mx-auto bg-gray-200 rounded-md shadow border p-1 mb-10 grid grid-cols-4 gap-0.5 max-w-xs z-10">
    <router-link class="col-span-1 hover:bg-gray-400 rounded-md text-center transition" :class="$router.currentRoute.value.path === '/' ? 'bg-gray-300' : ''" to="/">Home</router-link>
    <router-link class="col-span-1 hover:bg-gray-400 rounded-md text-center transition" :class="$router.currentRoute.value.path.startsWith('/methods') ? 'bg-gray-300' : ''" to="/methods">Methods</router-link>
    <router-link class="col-span-1 hover:bg-gray-400 rounded-md text-center transition" :class="$router.currentRoute.value.path.startsWith('/results') ? 'bg-gray-300' : ''" to="/results">Results</router-link>
    <router-link class="col-span-1 hover:bg-gray-400 rounded-md text-center transition" :class="$router.currentRoute.value.path.startsWith('/contact') ? 'bg-gray-300' : ''" to="/contact">Contact</router-link>
  </div>
  <div class="container mx-auto max-w-3xl">
    <router-view></router-view>
  </div>

  <footer class="text-center text-gray-500 my-10">
    <small>&copy; Copyright 2024, <router-link class="hover:underline" to="/">Yaşar İdikut, Camden Cummings, Samara Holmes</router-link></small>
  </footer>

</template>
<script setup>
</script>