<script>
export default{
    name: "AppCard",
    props:{
        card : Object
    },
    data(){
        return{
            imageFlag: ["de","en","es","fr","it","ru","tk"],
            hover: true
        }
    },
    methods:{
        getImagePath(imgPath){
            return new URL(imgPath, import.meta.url).href
        }
    },
    computed:{
        getTitle(){
            if (this.card.title) {
                return this.card.title
            }else{
                return this.card.name
            }
        },
        getOriginalTitle(){
            if (this.card.original_title) {
                return this.card.original_title
            }else{
                return this.card.original_name
            }
        },
        getVote(){
            if (this.card.vote_average > 5) {
                return 5
            }else{
                return Math.round(this.card.vote_average)
            }
        },
        // hide(){
        //     return this.hover = false
            
        // },
        // show(){
        //     return this.hover = true
        // }
    },

    
}
</script>
<template>
    <div class="card poster" v-if="hover" @mouseover="hover = false" @mouseleave="hover = true">
        <img :src="getImagePath(`https://image.tmdb.org/t/p/w342${card.poster_path}`)" alt="">
    </div>
    <div class="card" v-else>
        <h3> Titolo: {{getTitle}}</h3>
        <p>Titolo originale: {{getOriginalTitle}}</p>
        <div>
            <img class="flag" v-if="imageFlag.includes(card.original_language)" :src="getImagePath(`../assets/img/${card.original_language}.png`)" alt="">    
            <p v-else>Lingua: {{card.original_language}}</p> 
        </div>
        <!-- <p>Voto: {{card.vote_average}} </p> -->
        <span v-for="number in getVote"><i class="fa-solid fa-star"></i></span>
    </div> 

</template>

<style lang="scss" scoped>
    .card{
        margin: 1rem;
        width: 10rem;
        border: 1px solid lightgrey;
        padding: 0.5rem;
        img{
            object-fit: contain;
        }
    }
    .flag {
        width: 2rem;
        min-height: 1rem;
    }
  
</style>