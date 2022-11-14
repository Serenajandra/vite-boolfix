import {reactive} from "vue";
export const store = reactive({
apiMovieURL : "",
apiSeriesURL: "",
apiKey: "",
searchKey: "",
Loading: false,
movies: [],
series: []
})