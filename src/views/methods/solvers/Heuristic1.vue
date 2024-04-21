<template>
  <div class="text-xl m-10">
    <p class="mb-5">
      We have a Jupyter Notebook for this! Click <a class="underline hover:no-underline" target="_blank" href="https://github.com/wpi-nest-lab-bae-mqp-2023/milp-intro/blob/main/src/heuristic_attempts/yasars_heuristic_attempts/yasars_heuristic_attempt.ipynb">here</a> to see on GitHub, or see below.
    </p>

    <div id="h1_ipynb" ref="h1_ipynb" class="text-xs"></div>

  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  async created () {
    nb.executeJavaScript = true;
    const response = await fetch('https://raw.githubusercontent.com/wpi-nest-lab-bae-mqp-2023/milp-intro/main/src/heuristic_attempts/yasars_heuristic_attempts/yasars_heuristic_attempt.ipynb');
    while (this.$refs.h1_ipynb.hasChildNodes()) {
      this.$refs.h1_ipynb.removeChild(this.$refs.h1_ipynb.lastChild);
    }
    const data = await response.json()
    this.$refs.h1_ipynb.appendChild(nb.parse(data).render());
    Prism.highlightAll()
  },
  methods: {
  }
}

</script>

<style scoped>

</style>