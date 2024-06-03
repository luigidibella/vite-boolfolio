<script>
import axios from 'axios';
import{ store } from './data/store';

export default {
  
  data(){
    return {
      'projects' : [],
      loading: true
    }
  },

  methods:{
    getApi(){
      // console.log('get API');
      axios.get(store.apiUrl)
        .then(result => {
          this.loading = false;
          // console.log(result.data);
          this.projects = result.data.data
          // console.log(this.projects);
        })
        .catch(error =>{
          this.loading = false;
          console.log(error);
        })
    }
  },

  mounted(){
    this.getApi()
  }

}
</script>

<template>
  <div class="main-wrapper">
    <div class="container">
      <h1>boolfolio home</h1>
      
      <div v-if="!loading">
        <h3>i miei progetti:</h3>
        <ul>
          <li 
            v-for="project in projects" 
            :key="project.id"
          >
          {{project.id}} - {{project.title}}
          </li>
        </ul>
      </div>

      <p v-else> Loading... </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  
</style>