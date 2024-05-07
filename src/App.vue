
<template>
  <!-- Navigation Island -->
  <div class="p-5"></div>
  <div class="container mx-auto bg-gray-200 rounded-md shadow border p-1 grid grid-cols-4 gap-0.5 max-w-xs z-10">
    <router-link class="col-span-1 hover:bg-gray-400 rounded-md text-center transition" :class="$router.currentRoute.value.path === '/' ? 'bg-gray-300' : ''" to="/">Home</router-link>
    <router-link class="col-span-1 hover:bg-gray-400 rounded-md text-center transition" :class="$router.currentRoute.value.path.startsWith('/methods') ? 'bg-gray-300' : ''" to="/methods">Methods</router-link>
    <router-link class="col-span-1 hover:bg-gray-400 rounded-md text-center transition" :class="$router.currentRoute.value.path.startsWith('/results') ? 'bg-gray-300' : ''" to="/results">Results</router-link>
    <router-link class="col-span-1 hover:bg-gray-400 rounded-md text-center transition" :class="$router.currentRoute.value.path.startsWith('/contact') ? 'bg-gray-300' : ''" to="/contact">Contact</router-link>
  </div>

  <div v-show="$router.currentRoute.value.path.startsWith('/methods')" class="container mx-auto bg-gray-200 rounded-md shadow border p-1 mt-5 mb-10 max-w-sm z-10">
    <div class="grid grid-cols-3 gap-0.5 ">
      <router-link class="rounded-md hover:bg-gray-400 text-sm text-center transition" :class="$router.currentRoute.value.path.startsWith('/methods/milp') ? 'bg-gray-300' : ''" to="/methods/milp">MILP</router-link>
      <router-link class="rounded-md hover:bg-gray-400 text-sm text-center transition" :class="$router.currentRoute.value.path.startsWith('/methods/h1') ? 'bg-gray-300' : ''" to="/methods/h1">Heuristic 1</router-link>
      <router-link class="rounded-md hover:bg-gray-400 text-sm text-center transition" :class="$router.currentRoute.value.path.startsWith('/methods/h2') ? 'bg-gray-300' : ''" to="/methods/h2">Heuristic 2</router-link>
    </div>

    <div class="grid grid-cols-3 gap-0.5 ">
      <router-link class="rounded-md hover:bg-gray-400 text-sm text-center transition" :class="$router.currentRoute.value.path.startsWith('/methods/pms') ? 'bg-gray-300' : ''" to="/methods/pms">Point-Mass Sim</router-link>
      <router-link class="rounded-md hover:bg-gray-400 text-sm text-center transition" :class="$router.currentRoute.value.path.startsWith('/methods/argos-sim') ? 'bg-gray-300' : ''" to="/methods/argos-sim">ARGoS Sim</router-link>
      <router-link class="rounded-md hover:bg-gray-400 text-sm text-center transition" :class="$router.currentRoute.value.path.startsWith('/methods/argos-real') ? 'bg-gray-300' : ''" to="/methods/argos-real">ARGoS Real</router-link>
    </div>
  </div>

  <div class="container mx-auto max-w-3xl">
    <router-view></router-view>
  </div>

  <footer class="text-center text-gray-500 my-10">
    <small>&copy; Copyright 2024, <a class="hover:underline" target="_blank" href="https://godofkebab.github.io/">Yaşar İdikut</a>, Camden Cummings, <a class="hover:underline" target="_blank" href="https://samaraholmes.bitbucket.io/">Samara Holmes</a>, <a class="hover:underline" target="_blank" href="https://www.mathtable.com/zwillinger/">Daniel Zwillinger</a>, Benjamin Cooper, <a class="hover:underline" target="_blank" href="https://carlo.pinciroli.net/">Carlo Pinciroli</a></small>
  </footer>

</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-2xl;
    @apply font-bold;
  }
  h2 {
    @apply text-xl;
    @apply font-bold;

  }
  /* ... */
}
</style>