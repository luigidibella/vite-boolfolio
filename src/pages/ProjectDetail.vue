<script>

export default {
  name: 'ProjectDetail',
  mounted() {
    console.log(this.$route.params.slug);
  },
}

</script>

<template>
  <div class="main-wrapper">
    <div class="container">
      <h1>Titolo del Progetto</h1>
      
      <p>Benvenuto nel nostro sito dedicato allo sviluppo Full Stack! Scopri soluzioni innovative, risorse utili e il supporto di una comunità esperta per portare i tuoi progetti al successo.</p>
    
    </div>
  </div>
</template>

<style lang="scss" scoped>
  

  
</style>