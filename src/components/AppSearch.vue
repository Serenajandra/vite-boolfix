<script>
import { store } from '../store';
export default{
    name :"AppSearch",
    data(){
        return{
        store
        }
    },
    methods:{
    }
}
</script>

<template>
    <section>
        <label for="search">cerca</label>
        <input type="text" id="search" v-model="store.searchKey"/>
        <button @click="$emit(`search`)">conferma</button>
    </section>

</template>

<style lang="scss" scoped>

div{
background-color: aquamarine;
width: 100%;
height: 100px;
}
</style>