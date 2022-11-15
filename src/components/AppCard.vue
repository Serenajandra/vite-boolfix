<script>
export default{
    name: "AppCard",
    props:{
        card : Object
    },
    data(){
        return{
            imageFlag: ["de","en","es","fr","it","ru","tk"]
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
        }
    },

    
}
</script>
<template>
    <div class="card movies">
        <h3> Titolo: {{getTitle}}</h3>
        <p>Titolo originale: {{getOriginalTitle}}</p>
        <div>
            <img v-if="imageFlag.includes(card.original_language)" :src="getImagePath(`../assets/img/${card.original_language}.png`)" alt="">    
            <p v-else>Lingua: {{card.original_language}}</p> 
        </div>
        <p>Voto: {{card.vote_average}} </p>
    </div> 
    <!-- <div class="card series">
        <h3> Titolo: {{card.name}}</h3>
        <p>Titolo originale: {{card.original_name}}</p>
        <div>
            <img v-if="imageFlag.includes(card.original_language)" :src="getImagePath(`../assets/img/${card.original_language}.png`)" alt="">    
            <p v-else>Lingua: {{card.original_language}}</p> 
        </div>
        <p>Voto: {{card.vote_average}} </p>
    </div>  -->
</template>

<style lang="scss" scoped>
    .card{
        margin: 1rem;
    }
    img {
        width: 2rem;
        min-height: 1rem;
    }
</style>