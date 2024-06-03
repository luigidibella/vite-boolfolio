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
      types: [],
      technologies: [],
      paginatorData: {},
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
    <h1>Elenco Progetti</h1>
   
    <div class="container">
      <ul>
        <li 
          v-for="project in projects" 
          :key="project.id"
        >
          {{ project.id }} - {{ project.title }}
        </li>
      </ul>

      <div>
        <div class="box">
          <h4>Tipi:</h4>
          <div class="inner">
            <span 
              v-for="type in types" 
              :key="`t-${type.id}`" 
              class="badge"
            >
              {{ type.name }}
            </span>
          </div>
        </div>

        <div class="box">
          <h4>Tecnologie:</h4>
          <div class="inner">
            <span 
              v-for="technology in technologies" 
              :key="`t-${technology.id}`" 
              class="badge"
            >
              {{ technology.name }}
            </span>
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
    min-height: 532px;
    ul{
      padding: 0 30px;
      li{
        margin: 5px auto;
      }
    }
    .box{
      border: 1px solid white;
      border-radius: 5px;
      margin-bottom: 20px;
      padding: 15px;
      max-width: 200px;
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