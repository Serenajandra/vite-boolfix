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
    <div class="main-container">
        <section class="movies">
            <div class="row">
                <div class="col"  v-for="movie in store.movies" :key="movie.id" >
                    <AppCard :card="movie"/>
                </div>
            </div>
        </section>
        <section class="series">
            <div class="row">
                <div class="col" v-for="serie in store.series" :key="serie.id" >
                    <AppCard :card="serie"/>
                </div>
            </div>
        </section>
    </div>
</template>
<style lang="scss" scoped>
.main-container{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    .row{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        justify-content: space-around;
        .col{
            margin: 1rem;
            width: calc((100% / 5) - 10px );
            padding: 0.2rem;
        }
    }
}
</style>