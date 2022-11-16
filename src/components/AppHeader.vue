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
            if (resp.data.results.length !== 0) {
              this.store.movies = resp.data.results;
            // console.log(resp)
            }else{
              alert("Questa ricerca nella categoria film non ha prodotto risultati");
              this.store.movies = []
            }
          })).catch(error=>{
            this.store.movies = []

          })
        },
        searchSerie(){
          axios.get(`${this.store.apiSeriesURL}${this.store.apiKey}&query=${this.store.searchKey}`).then((resp => {
            if (resp.data.results.length !== 0) {
            this.store.series = resp.data.results;
            // console.log(resp)
          }else{
            alert("Questa ricerca nella categoria serie TV non ha prodotto risultati");
            this.store.series = []
          }
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