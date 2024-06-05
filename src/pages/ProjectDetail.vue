<script>
import { store } from '../data/store';
import axios from 'axios';
import Loader from '../components/partials/Loader.vue';

export default {

  name: 'ProjectDetail',
  components:{
    Loader,
  },
  data(){
    return{
      project: {},
      loading: true,
    }
  },
  methods: {
    getApi(){
      // console.log(this.$route.params.slug);
      const slug = this.$route.params.slug;
      axios.get(store.apiUrl + 'project-by-slug/' + slug )
      .then(result => {
        this.loading = false;
        // console.log(result.data);
        this.project = result.data.project;
      })
      .catch(error => {
        this.loading = false;
        console.log(error);
      })
    },
    // getImgPath(img) {
    //   console.log(img);
    //   return "http://127.0.0.1:8000" + img;
    // },
  },
  computed:{
    type(){
      if(!this.project.type){
        return '-Nessun Tipo-';
      }
      return 'Tipo: ' + this.project.type.name;
    },
    technologies(){
      if(this.project.technologies.length === 0){
        return '-Nessuna Tecnologia-';
      }

      // let technologiesString = '';
      // this.project.technologies.forEach(technology => {
      //   console.log(technology.name)
      //   technologiesString += technology.name + ' ';
      // });
      // return 'Tecnologie: '  + technologiesString;

      return 'Tecnologie: ' + this.project.technologies.map(type => type.name).join(' - ');
    },
    formattedDate(){
      const d = new Date(this.project.updated_at);
      // console.log(navigator.language);
      let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }
      // return d.getDate() + '/' + (d.getMonth() + 1 ) + '/' + d.getFullYear();
      // console.log(new Intl.DateTimeFormat(navigator.language).format(d));
      return new Intl.DateTimeFormat(navigator.language, options).format(d);
    }
  },
  mounted() {
    this.getApi();
  },
}

</script>

<template>
  <div class="main-wrapper">

    <div class="d-flex-center" v-if="loading">
      <Loader />
    </div>

    <div class="container" v-else>
      <h1>{{ project.title }}</h1>
      
      <p class="caption">{{ type }}</p>
      <p class="caption">{{ technologies }}</p>
      
      <img :src="project.image" alt="{{ project.image_original_name }}">
      
      <p class="text">{{ project.text }}</p>
      <p class="date">{{ formattedDate }}</p>
    
    </div>
  </div>
</template>

<style lang="scss" scoped>

img{
  max-width: 100%;
  max-height: 400px;
  border: 1px solid white;
}

.caption{
  margin-bottom: 20px;
}

.text{
  border-top: 1px solid white;
  margin-top: 20px;
  padding-top: 5px;
}

.date{
  text-align: end;
  margin-top: 20px;
}

</style>