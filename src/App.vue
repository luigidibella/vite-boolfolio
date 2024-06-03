<script>
import Header from './components/Header.vue'

export default {
  components:{
    Header,
  },
  data(){
    return {
      
    }
  },

  methods:{
    
  },

  mounted(){
    
  }

}
</script>

<template>
  <div class="main-wrapper">
    
    <div class="container">
      <Header />
    </div>

    <main class="container">
      <router-view></router-view>
    </main>

  </div>
</template>

<style lang="scss" scoped>

main{
  margin-top: 20px;
  border: 1px solid white;
  border-radius: 10px;
  padding: 20px;
}
  
</style>