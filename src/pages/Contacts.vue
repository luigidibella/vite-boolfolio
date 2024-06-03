<script>

export default {
  
  name: 'Contacts',
}
</script>

<template>
  <div class="main-wrapper">
    <div class="container">
      <h1>Contacts</h1>

      <ul>
          <li>Mario Rossi
            <ul>
              <li><strong>Ruolo: </strong>Senior Full Stack Developer</li>
              <li><strong>Email: </strong>mario.rossi@fullstackdev.com</li>
              <li><strong>Telefono: </strong>+39 123 456 7890</li>
            </ul>
          </li>
          <li>Giulia Bianchi
            <ul>
              <li><strong>Ruolo: </strong>Frontend Specialist</li>
              <li><strong>Email: </strong>giulia.bianchi@fullstackdev.com</li>
              <li><strong>Telefono: </strong>+39 123 456 7891</li>
            </ul>
          </li>
          <li>Luca Verdi
            <ul>
              <li><strong>Ruolo: </strong>Backend Engineer</li>
              <li><strong>Email: </strong>luca.verdi@fullstackdev.com</li>
              <li><strong>Telefono: </strong>+39 123 456 7892</li>
            </ul>
          </li>
      </ul>
    
    </div>
  </div>
</template>

<style lang="scss" scoped>
  
h1{
  margin-bottom: 20px;
}

ul{
  padding: 10px;
  li{
    ul{
      li{
        list-style: disc;
      }
    }
  }
}
  
</style>