<script>
import axios from 'axios';

export default {
  
  data(){
    return {
      'projects' : []
    }
  },

  methods:{
    getApi(){
      console.log('get API');
      axios.get('http://127.0.0.1:8000/api/projects')
        .then(result => {
          this.projects = result.data
          console.log(this.projects);
        })
        .catch(error =>{
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
      <h3>i miei progetti:</h3>
      <ul>
        <li 
          v-for="project in projects" 
          :key="project.id"
        >
        {{project.id}} - {{project.title}}</li>
        
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  
</style>