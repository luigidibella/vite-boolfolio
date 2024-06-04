<script>
import { store } from '../data/store';
import axios from 'axios';
import Paginator from '../components/partials/Paginator.vue';
import Loader from '../components/partials/Loader.vue';

export default {
  
  name: 'Projects',
  components:{
    Paginator,
    Loader,
  },
  data(){
    return{
      projects: [],
      types: [],
      technologies: [],
      paginatorData: {},
      loading: true,
    }
  },
  methods:{
    getApi(apiUrl, type = ''){
      axios.get(apiUrl + type)
        .then(result => {
          this.loading = false;

          switch (type) {
            case 'types':
              this.types = result.data
              break;
            case 'technologies':
              this.technologies = result.data
              break;
            default:
              this.projects = result.data.data
              this.paginatorData.current_page = result.data.current_page;
              this.paginatorData.links = result.data.links;
              this.paginatorData.total = result.data.total;
              break;
          }

          // if(type === 'projects' || type == ''){
          //   this.projects = result.data.data
          //   this.paginatorData.current_page = result.data.current_page;
          //   this.paginatorData.links = result.data.links;
          //   this.paginatorData.total = result.data.total;
          //   console.log(this.projects);
          // }else if(type === 'types'){
          //   this.types = result.data
          //   console.log(this.types);
          // }else{
          //   this.technologies = result.data
          //   console.log(this.technologies);
          // }
          //   console.log(this.paginatorData);

        })
        .catch(error =>{
          this.loading = false;
          console.log(error);
        })
    }
  },
  mounted(){
    this.getApi(store.apiUrl, 'projects');
    this.getApi(store.apiUrl, 'types');
    this.getApi(store.apiUrl, 'technologies');
  }
}
</script>

<template>
  <div class="main-wrapper">
    <h1>Elenco Progetti:</h1>
    
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

      <div>
        <div class="box">
          <h4>Tipi:</h4>
          <div class="inner">
            <router-link 
              v-for="type in types" 
              :key="`t-${type.id}`" 
              class="badge"
              :to="{ name: 'typeProjects', params:{slug: type.slug} }"
            >
              {{ type.name }}
            </router-link>
          </div>
        </div>

        <div class="box">
          <h4>Tecnologie:</h4>
          <div class="inner">
            <router-link 
              v-for="technology in technologies" 
              :key="`t-${technology.id}`" 
              class="badge"
              :to="{ name: 'technologyProjects', params:{slug: technology.slug} }"
            >
              {{ technology.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div>
      <Paginator :data="paginatorData" @callApi="getApi" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.main-wrapper{
  .container{
    display: flex;
    justify-content: space-between;
    min-height: 532px;
    ul{
      list-style: none;
      padding: 0 5px;
      li{
        margin: 5px 0;
      }
    }
    .box{
      border: 1px solid white;
      border-radius: 5px;
      margin-bottom: 20px;
      padding: 15px;
      max-width: 190px;
      .inner{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      .badge{
        display: inline-block;
        background-color: white;
        border-radius: 3px;
        padding: 3px 7px;
        color: black;
        margin: 5px;
        cursor: pointer;
        &:hover{
          background-color: #d1e7dd;
        }
      }
    }
  }
}

</style>