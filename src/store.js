import {reactive} from "vue";
export const store = reactive({
    // apiMultiSearchURL: "https://api.themoviedb.org/3/search/multi?page=1&query=ciao&api_key=21664edfe2500b8b2b32d6e5ea139b7b",
    // apiMoviesURL : "https://api.themoviedb.org/3/search/movie?api_key=21664edfe2500b8b2b32d6e5ea139b7b&language=en-US&page=1&query=",
    // apiSeriesURL: "https://api.themoviedb.org/3/search/tv?api_key=21664edfe2500b8b2b32d6e5ea139b7b&language=en-US&page=1&query=ciao",
    apiKey: "21664edfe2500b8b2b32d6e5ea139b7b",
    searchKey: "",
    loading: false,
    movies: [],
    series: [],
    // searchResults: [],
    // flags: []
})