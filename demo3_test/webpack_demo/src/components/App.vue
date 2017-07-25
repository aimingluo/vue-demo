<template>
  <div id="app">
    <div class="container">
    <search :set-search-name="setSearchName" />
     <MYmain :search-name="searchName" />
    </div>
  </div>
</template>

<script>
  import search from './search.vue'
  import  main from './main.vue'
  export default {
    data(){
      return {
        searchName:''
      }
    },
    components:{
      search,
      'MYmain':main
    },
    methods:{
      setSearchName(name){
        this.searchName=name
      }
    }

  }
</script>

<style>

</style>
