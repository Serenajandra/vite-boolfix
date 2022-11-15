<script>
import{store} from "./store";
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
  }
}
</script>

<template>
  <div class="wrapper">
    <header> 
      <AppHeader />
    </header>
    <main>
      <AppCardsList />
    </main>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as*;

.wrapper{
  width: 100%;
  height: 100vh;
  background-color: rgb(78, 78, 78);
  
  header{
    width: 100%;
    height:80px;
    background-color: rgb(14, 13, 13);
    color: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    font-weight: 60;
    font-size: 2rem;
  }
  main{
    width: 100%;
    height: calc(100vh - 80px);
  }
}

</style>
