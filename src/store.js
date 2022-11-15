import {reactive} from "vue";
export const store = reactive({
    apiMoviesURL : "https://api.themoviedb.org/3/search/movie?",
    apiSeriesURL: "https://api.themoviedb.org/3/search/tv?",
    apiKey: "&api_key=21664edfe2500b8b2b32d6e5ea139b7b",
    searchKey: "",
    
    loading: false,
    movies: [],
    series: [],
    // searchResults: [],
    // flags: [] 
    
})