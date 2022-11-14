<script>
import{store} from "./store";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppCardsList from "./components/AppCardsList.vue";


export default{
 
  components:{
  AppHeader,
  AppCardsList
  },
  data(){
    return{
      store,
    }
  },

  created() {

  }
}
</script>

<template>
  <header> 
    <AppHeader />

  </header>
  <main>
    <AppCardsList />
  </main>
  
</template>

<style lang="scss">
@use "./styles/general.scss" as*
</style>
