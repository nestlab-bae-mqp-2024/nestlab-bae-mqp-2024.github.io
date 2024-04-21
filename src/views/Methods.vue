<template>
  <div class="text-xl m-10">
    <p class="mb-5">
      Here, you can find out how we are implementing each of our <strong>solvers</strong> as well as our <strong>environments</strong>(simulations and lab setups).
    </p>

    <p class="text-2xl mb-5">
      <strong>Solvers</strong>
    </p>
    <div class="ml-5">
      <p class="mb-5">
        <router-link class="mb-5 underline hover:no-underline" to="/methods/milp"><strong>MILP (Mixed-Integer Linear Programming)</strong></router-link>
      </p>

      <p class="ml-5 mb-5">
        This is the optimal solver for our problem, but it takes days or weeks to solve until optimality.
        In the case we present (8 robots, 64 nodes, ...), it took my computer 2.5 days to get to a solution with an optimality gap of <8%.
      </p>

      <p class="mb-5">
        <router-link class="mb-5 underline hover:no-underline" to="/methods/h1"><strong>Heuristic 1</strong></router-link>
      </p>

      <p class="ml-5 mb-5">
        This is the drop-in replacement for MILP. It has an objective similar to MILP.
      </p>

      <p class="mb-5">
        <router-link class="mb-5 underline hover:no-underline" to="/methods/h2"><strong>Heuristic 2/Recalc</strong></router-link>
      </p>

      <p class="ml-5 mb-5">
        ...
      </p>
    </div>


    <p class="text-2xl mb-5">
      <strong>Environments</strong>
    </p>
    <div class="ml-5">
      <p class="mb-5">
        <router-link class="mb-5 underline hover:no-underline" to="/methods/pms"><strong>Point-Mass-based Simulation</strong></router-link>
      </p>

      <p class="ml-5 mb-5">
        ...
      </p>

      <p class="mb-5">
        <router-link class="mb-5 underline hover:no-underline" to="/methods/argos-sim"><strong>ARGoS Simulation</strong></router-link>
      </p>

      <p class="ml-5 mb-5">
        ...
      </p>

      <p class="mb-5">
        <router-link class="mb-5 underline hover:no-underline" to="/methods/argos-real"><strong>ARGoS Real Robots</strong></router-link>
      </p>

      <p class="ml-5 mb-5">
        ...
      </p>
    </div>


  </div>
</template>

<script>
</script>

<style scoped>

</style>