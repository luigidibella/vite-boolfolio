<script>
import { store } from '../data/store'
import axios from 'axios';
import Paginator from './partials/Paginator.vue';

export default {
  
  name: 'Projects',
  components:{
    Paginator,
  },
  data(){
    return{
      projects: [],
      paginatorData: {},
    }
  },
  methods:{
    getApi(apiUrl){
      axios.get(apiUrl)
        .then(result => {
          this.loading = false;
          this.projects = result.data.data
          this.paginatorData.current_page = result.data.current_page;
          this.paginatorData.links = result.data.links;
          this.paginatorData.total = result.data.total;
          // console.log(this.paginatorData);
        })
        .catch(error =>{
          this.loading = false;
          console.log(error);
        })
    }
  },
  mounted(){
    this.getApi(store.apiUrl);
  }
}
</script>

<template>
  <div class="main-wrapper">
    <div class="container">
      <h1>Elenco Progetti</h1>
      
      <p 
        v-for="project in projects" 
        :key="project.id"
      >
      {{ project.id }} - {{ project.title }}
    </p>
    
    </div>

    <div>
      <Paginator :data="paginatorData" @callApi="getApi" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

h1{
  margin-bottom: 20px;
}

p{
  margin: 5px auto;
}

.container{
  min-height: 532px;
}
</style>