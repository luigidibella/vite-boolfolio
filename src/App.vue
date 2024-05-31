<script>
import axios from 'axios';

export default {
  
  data(){
    return {
      'projects' : [],
      loading: true
    }
  },

  methods:{
    getApi(){
      console.log('get API');
      axios.get('http://127.0.0.1:8000/api/projects')
        .then(result => {
          this.loading = false;
          this.projects = result.data
          console.log(this.projects);
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