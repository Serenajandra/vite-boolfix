<script>
import {store} from "../store";
import AppCard from "./AppCard.vue";
export default{
    name: "AppCardList",
    components:{
        AppCard
    },
    data(){
        return{
            store,
        }
    }
}
</script>
<template>
    <div class="container">
        <div class="row">
            <AppCard v-for="movie in store.movies" :key="movie.id" :card="movie"/>
            <AppCard v-for="serie in store.series" :key="serie.id" :card="serie"/>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container{
    width: 100%;
    height: 100%;
    .row{
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
}
</style>