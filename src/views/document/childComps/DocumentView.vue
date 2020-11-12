<template>
  <div>
    <pdf :src="src"
         v-for="i in numPages"
         :key="i"
         :page="i"/>
  </div>
</template>
<script>
  import pdf from 'vue-pdf'
  import CMapReaderFactory from 'vue-pdf/src/CMapReaderFactory.js'

  export default {
    name: 'DocumentView',
    components: {
      pdf
    },
    props: {
      src: ''
    },
    data() {
      return {
        numPages: 5
      }
    },
  }
</script>
<style scoped>
</style>
