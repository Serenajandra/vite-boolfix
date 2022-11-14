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

            // this.store.loading = true;
            // let myUrl = this.store.apiMoviesURL;
            // if (this.store.searchKey !== "") {
            //     myUrl = this.store.searchKey;
            // }

          axios.get(`https://api.themoviedb.org/3/search/movie?api_key=21664edfe2500b8b2b32d6e5ea139b7b&language=en-US&page=1&query="${this.store.searchKey}`).then((resp => {
            // Il risultato della chiamata è uguale all'array movies
            this.store.movies = resp.data.results;
           //  console.log(resp)
          })).catch(error=>{
            this.store.movies = []
          })
        //   .finally(()=>{
        //     this.store.loading = false; 
        //   })

        // axios.get(`https://api.themoviedb.org/3/search/tv?api_key=21664edfe2500b8b2b32d6e5ea139b7b&language=it_IT&query=${this.store.searchKey}`).then((resp => {
        //     // Il risultato della chiamata è uguale all'array series
        //     this.store.series = resp.data.results;
        //    //  console.log(resp)
        //   })).catch(error=>{
        //     this.store.series = []
        //   })
        }
  },
}
</script>

 <template>
    <h1>Boolfix</h1>
    <AppSearch @search="searchUserInput()" />
 </template>
 
 <style lang=" scss" scoped>
 

</style>