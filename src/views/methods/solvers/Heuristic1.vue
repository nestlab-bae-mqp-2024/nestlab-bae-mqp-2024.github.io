<template>
  <div class="text-xl m-10 grid grid-cols-1 divide-y">
    <div class="mb-5">
      We have a Jupyter Notebook for this! Click <a class="underline hover:no-underline" target="_blank" href="https://github.com/nestlab-bae-mqp-2024/mrpcp-solvers/blob/main/src/heuristic_attempts/yasars_heuristic_attempts/yasars_heuristic_attempt.ipynb">here</a> to see on GitHub, or see below.
    </div>

    <div id="h1_ipynb" ref="h1_ipynb" class="text-xs pt-5"></div>

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
    // const response = await fetch('http://localhost:5173/public/Users/yasaridikut/WebstormProjects/mqp-website/public/py/src/heuristic_attempts/yasars_heuristic_attempts/yasars_heuristic_attempt.ipynb');
    const response = await fetch('https://raw.githubusercontent.com/nestlab-bae-mqp-2024/mrpcp-solvers/main/src/heuristic_attempts/yasars_heuristic_attempts/yasars_heuristic_attempt.ipynb');
    const data = await response.json()
    this.$refs.h1_ipynb.appendChild(nb.parse(data).render());
    Prism.highlightAll()
  },
  methods: {
  }
}

</script>
