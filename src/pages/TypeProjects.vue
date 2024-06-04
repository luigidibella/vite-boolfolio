<script>
import { store } from '../data/store';
import axios from 'axios';
import Loader from '../components/partials/Loader.vue';


export default {
  
  name: 'TypeProjects',
  components:{
    Loader,
  },
  data(){
    return{
      typeName: '',
      Projects: [],
      loading: true,
    }
  },
  methods: {
    getApi(slug){
      axios.get(store.apiUrl + 'projects-by-type' + '/' + slug)
      .then(result => {
        this.loading = false;
        this.typeName = result.data.name;
        this.projects = result.data.projects;
      })
      .catch(error => {
        this.loading = false;
        console.log(error);
      })
    }
  },
  mounted() {
    this.getApi(this.$route.params.slug)
  },
}

</script>

<template>
  <div class="main-wrapper">
    <h1>Elenco Progetti: {{ typeName }}</h1>

    <div class="d-flex-center" v-if="loading">
      <Loader />
    </div>

    <div class="container" v-else>
      <ul>
        <li 
          v-for="project in projects" 
          :key="project.id"
        >
          {{ project.id }} - 
          <router-link :to="{ name: 'projectDetail', params:{slug: project.slug} }">{{ project.title }}</router-link>
        </li>
      </ul>
    
    </div>
  </div>
</template>

<style lang="scss" scoped>

.main-wrapper{
  .container{
    display: flex;
    justify-content: start;
    min-height: 532px;
    ul{
      list-style: none;
      padding: 0 5px;
      li{
        margin: 5px 0;
      }
    }
  }
}

</style>