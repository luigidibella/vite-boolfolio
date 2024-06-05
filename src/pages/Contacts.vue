<script>
import axios from 'axios';
import { store } from '../data/store';

export default {
  
  name: 'Contacts',
  data(){
    return{
      name: 'jiji',
      email: 'jiji@gudoghi.it',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, corporis.',
    }
  },
  methods: {
    sendEmail(){
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
      }

      axios.post(store.apiUrl + 'send-email', data)
      .then(result => {
        console.log(result.data);
      })
      .catch(error => {
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

      <form @submit.prevent="sendEmail">
        <div  >
          <div>
            <label for="name">Nome</label>
            <input v-model="name" type="text" name="name" id="name" />
            <p class="error"></p>
          </div>
          <div>
            <label for="email">Email</label>
            <input v-model="email" type="text" name="email" id="email" />
            <p class="error"></p>
          </div>
          <div>
            <label for="message">Messaggio</label>
            <textarea v-model="message" name="message" id="message"></textarea>
            <p class="error"></p>
          </div>
          <div>
            <button type="submit">Invia</button>
          </div>
        </div>
      </form>
    
    </div>
  </div>
</template>

<style lang="scss" scoped>

form{
  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    div{
      margin-bottom: 10px;
    }
  }
}

input,
textarea,
button{
  width: 400px;
}

input{
  height: 20px;
}

textarea{
  height: 100px;
}
  
</style>