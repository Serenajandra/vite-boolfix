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
    }
}
</script>
<template>
    <ul>
        <li>
            <h3> Titolo: {{card.title}}</h3>
        </li>
        <li>Titolo originale: {{card.original_title}}</li>
        <li>
            <img v-if="imageFlag.includes(card.original_language)" :src="getImagePath(`../assets/img/${card.original_language}.png`)" alt="">    
            <p v-else>Lingua: {{card.original_language}}</p> 
        </li>
        <li>Voto: {{card.vote_average}} </li>
    </ul>
    <div class="card"></div>
</template>

<style lang="scss" scoped>
    ul{
        margin: 1rem;
    }
    img {
        width: 2rem;
        min-height: 1rem;
    }
</style>