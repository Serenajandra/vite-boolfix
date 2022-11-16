<script>
export default{
    name: "AppCard",
    props:{
        card : Object
    },
    data(){
        return{
            imageFlag: ["de","en","es","fr","it","ru","tk"],
            hover: false
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
            return Math.round(this.card.vote_average / 2)
        }
    },

    
}
</script>
<template>
    <div class="card-container relative">

        <div class="card front">

            <img v-if="card.poster_path !== null" :src="getImagePath(`https://image.tmdb.org/t/p/w342${card.poster_path}`)" alt="">
            <img v-else src="../assets/img/no-imagine.png" alt="">
        
        </div>

        <div class="card back">
            <h3> Titolo: {{getTitle}}</h3>
            <p>Titolo originale: {{getOriginalTitle}}</p>
            <div>
                <img class="flag" v-if="imageFlag.includes(card.original_language)" :src="getImagePath(`../assets/img/${card.original_language}.png`)" alt="">    
                <p v-else>Lingua: {{card.original_language}}</p> 
            </div>
            <!-- <p>Voto: {{getVote}} </p> -->
            <span v-for="number in 5" :key="number"><i class="fa-star" :class="number <= getVote ? `fa-solid` : `fa-regular` "></i></span>
        </div> 
    </div>

</template>

<style lang="scss" scoped>
    .card{
        height: 100%;
        width: 100%;
    }
   .back{
       color: white;
       background-color: rgba(0, 0, 0, 0.795);
       position: absolute;
       left: 0;
       top:0;
       z-index: -1;
       padding: 0.2rem;
    
        .flag {
            width: 2rem;
            min-height: 1rem;
        }
    }

    .card-container:hover .back{
        z-index: 100;
    }
</style>