<script>
import axios from 'axios';
import { store } from '../data/store';
import Loader from '../components/partials/Loader.vue'

export default {
  
  name: 'Contacts',
  components:{
    Loader,
  },
  data(){
    return{
      name: 'jiji',
      email: 'jiji@gudoghi.it',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, corporis.',
      sending: false,
      sent: false,
      errors: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    sendEmail(){
      this.sending = true;
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
        
      }
      
      axios.post(store.apiUrl + 'send-email', data)
      .then(result => {
        this.sending = false;
        console.log(result.data);
        this.sent = result.data.success;
        if(!result.data.success){
          this.errors = result.data.errors;
        }else{
          this.errors = {
            name: '',
            email: '',
            message: '',
          }
        }
      })
      .catch(error => {
        this.sending = false;
        console.log(error.message);
      })

      console.log(data);
    }
  },
}

</script>

<template>
  <div class="main-wrapper">
    <div class="container">
      <h1>Contatti</h1>

      <div v-if="!sending">
        <form v-if="!sent" @submit.prevent="sendEmail">
          <div  >
            <div>
              <label for="name">Nome</label>
              <input v-model="name" type="text" name="name" id="name" />
              <p class="error">{{ errors.name?.toString() }}</p>
            </div>
            <div>
              <label for="email">Email</label>
              <input v-model="email" type="text" name="email" id="email" />
              <p class="error">{{ errors.email?.toString() }}</p>
            </div>
            <div>
              <label for="message">Messaggio</label>
              <textarea v-model="message" name="message" id="message"></textarea>
              <p class="error">{{ errors.message?.toString() }}</p>
            </div>
            <div>
              <button type="submit">Invia</button>
            </div>
          </div>
        </form>

        <h3 v-else>Email inviata correttamente</h3>
      </div>

      <div class="d-flex-center" v-else>
        <Loader />
      </div>
    
    </div>
  </div>
</template>

<style lang="scss" scoped>

form{
  div{
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    div{
      margin-bottom: 10px;
      .error{
        color: brown;
      }
    }
  }
}

// input,
// textarea,
// button{
// }

input{
  height: 20px;
}

textarea{
  height: 100px;
}
  
</style>