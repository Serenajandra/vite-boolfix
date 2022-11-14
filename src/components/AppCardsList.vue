<script>
import {store} from "../store";
export default{
    name: "AppCardList",

    data(){
        return{
            store,
        }
    }
}
</script>
<template>
    <div class="container">
        <ul>
            <li v-for="movie in store.movies" :key="movie.id">
                <ul>
                    <li>Titolo: {{movie.title}}</li>
                    <li>Titolo originale: {{movie.original_title}}</li>
                    <li>Lingua: {{movie.original_language}}</li>
                    <li>Voto: {{movie.vote_average}} </li>
                </ul>
            </li>
        </ul>
        <!-- <div class="row">
            <div class="col">
                <div class="card"></div>
            </div>
        </div> -->
    </div>
</template>
<style lang="scss" scoped>
ul{
    margin: 1rem;
}
</style>