<script>

export default {
  
  name: 'Paginator',
  props: {
    data:Object
  },
  methods: {
    callApi(link){
      // console.log(link);
      this.$emit('callApi', link)
    }
  },
}
</script>

<template>
  <div class="paginator">
    <button
      v-for="link in data.links"
      :key="link.label"
      v-html="link.label"
      :disabled="link.active || (!link.url && link.label !== '...')"
      @click="callApi(link.url)"
    >
    </button>

  </div>
</template>

<style lang="scss" scoped>

.paginator{
  margin-top: 20px;
  button{
    padding: 5px 10px;
    margin-right: 5px;
  }
}
  
</style>