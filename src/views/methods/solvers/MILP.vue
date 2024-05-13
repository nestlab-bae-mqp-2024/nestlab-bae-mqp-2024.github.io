<template>
  <div class="text-xl m-10">
    <p class="mb-5">
      We have a Jupyter Notebook for this! Click <a class="underline hover:no-underline" target="_blank" href="https://github.com/nestlab-bae-mqp-2024/mrpcp-solvers/blob/main/src/mrpcp_2015/attempts-and-improvements/2015_mrpcp_yasars_attempt_w_redundancy_param.ipynb">here</a> to see on GitHub, or see below.
    </p>

    <div id="milp_ipynb" ref="milp_ipynb" class="text-xs"></div>

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
    // const response = await fetch('http://localhost:5173/public/Users/yasaridikut/WebstormProjects/mqp-website/public/py/src/solvers/milp/mqp_milp.ipynb');
    const response = await fetch('https://raw.githubusercontent.com/nestlab-bae-mqp-2024/mrpcp-solvers/main/src/solvers/milp/mqp_milp.ipynb');
    while (this.$refs.milp_ipynb.hasChildNodes()) {
      this.$refs.milp_ipynb.removeChild(this.$refs.milp_ipynb.lastChild);
    }
    const data = await response.json()
    this.$refs.milp_ipynb.appendChild(nb.parse(data).render());
    Prism.highlightAll()
  },
  methods: {
  }
}

</script>

<style scoped>

</style>