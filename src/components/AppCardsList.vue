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
    },
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card">
                    <AppCard v-for="movie in store.movies" :key="movie.id" :card="movie"/>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>

</style>