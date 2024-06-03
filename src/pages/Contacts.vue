<script>

export default {
  
  name: 'Contacts',
}
</script>

<template>
  <div class="main-wrapper">
    <div class="container">
      <h1>Contacts</h1>

      <div class="contact-list">
        <ul>
            <li>Mario Rossi
              <ul>
                <li><strong>Ruolo: </strong><em>Senior Full Stack Developer</em></li>
                <li><strong>Email: </strong><a href="#">mario.rossi@fullstackdev.com</a></li>
                <li><strong>Telefono: </strong><a href="#">+39 123 456 7890</a></li>
              </ul>
            </li>
            <li>Giulia Bianchi
              <ul>
                <li><strong>Ruolo: </strong><em>Frontend Specialist</em></li>
                <li><strong>Email: </strong><a href="#">giulia.bianchi@fullstackdev.com</a></li>
                <li><strong>Telefono: </strong><a href="#">+39 123 456 7891</a></li>
              </ul>
            </li>
            <li>Luca Verdi
              <ul>
                <li><strong>Ruolo: </strong><em>Backend Engineer</em></li>
                <li><strong>Email: </strong><a href="#">luca.verdi@fullstackdev.com</a></li>
                <li><strong>Telefono: </strong><a href="#">+39 123 456 7892</a></li>
              </ul>
            </li>
        </ul>
      </div>
    
    </div>
  </div>
</template>

<style lang="scss" scoped>

.contact-list{
  ul{
    list-style: none;
    li{
      ul{
        padding: 10px 30px;
        li{
          list-style: disc;
        }
      }
    }
  }
}
  
</style>