<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import{store} from "./store";

export default{
  data(){
    return{
      store,
    }
  },
  components:{
AppHeader
  }
}
</script>

<template>
  <AppHeader />

<h1>Ciao!</h1>
</template>

<style lang="scss">
@use "./styles/general.scss" as*
</style>
