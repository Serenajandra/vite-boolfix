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
          axios.get(`https://api.themoviedb.org/3/search/movie?api_key=21664edfe2500b8b2b32d6e5ea139b7b&language=en-US&page=1&query="${this.store.searchKey}`).then((resp => {
            // Il risultato della chiamata è uguale all'array movies
            this.store.movies = resp.data.results;
           //  console.log(resp)
          }))
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