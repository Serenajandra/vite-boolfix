<script>
import AppSearch from './AppSearch.vue';
import axios from "axios";
import {store} from "../store";
export default {
    name: "AppHeader",

    components: {
        AppSearch,
    },

    data(){
        return{
            store
        }
    },

    methods:{
        searchUserInput (){
            this.searchMovie(),
            this.searchSerie()
            // this.store.loading = true;
            // let myUrl = this.store.apiMoviesURL;
            // if (this.store.searchKey !== "") {
            //     myUrl = this.store.searchKey;
            // }
        },

        searchMovie(){
          axios.get(`${this.store.apiMoviesURL}${this.store.apiKey}&query=${this.store.searchKey}`).then((resp => {
            // Il risultato della chiamata è uguale all'array movies
            this.store.movies = resp.data.results;
            // console.log(resp)
          })).catch(error=>{
            this.store.movies = []
          })
        },
        searchSerie(){
          axios.get(`${this.store.apiSeriesURL}${this.store.apiKey}&query=${this.store.searchKey}`).then((resp => {
            // Il risultato della chiamata è uguale all'array movies
            this.store.series = resp.data.results;
            // console.log(resp)
          })).catch(error=>{
            this.store.series = []
          })
        },
  },
}
</script>

 <template>
    <h1>Boolflix</h1>
    <AppSearch @search="searchUserInput()" />
 </template>
 
 <style lang=" scss" scoped>
 

</style>