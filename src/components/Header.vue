<script>
  export default {
    name: 'Header',
  }
</script>

<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><router-link :to="{name: 'home'}">Home</router-link></li>
          <li><router-link :to="{name: 'about'}">About</router-link></li>
          <li><router-link :to="{name: 'projects'}">Projects</router-link></li>
          <li><router-link :to="{name: 'contacts'}">Contacts</router-link></li>
        </ul>
      </nav>
    </header> 
  </div>
</template>

<style lang="scss" scoped>

header{
  ul{
    display: flex;
    li{
      list-style: none;
      a{
        color: white;
        text-decoration: none;
        padding: 0 20px;
        text-transform: uppercase;
      }
    }
  }
}
  
</style>