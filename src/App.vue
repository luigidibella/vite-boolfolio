<script>
import axios from 'axios';

export default {

  methods:{
    getApi(){
      console.log('get API');
    }
  },

  mounted(){
    this.getApi()
  }

}
</script>

<template>
  <div class="main-wrapper">
    <h1>boolfolio home</h1>
  </div>
</template>

<style lang="scss" scoped>
  
</style>