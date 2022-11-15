<script>
import { store } from '../store';
export default{
    name :"AppSearch",
    data(){
        return{
        store
        }
    }
}
</script>

<template>
    <section>
        <label for="search"></label>
        <input type="text" id="search" v-model="store.searchKey"/>
        <button @click="$emit(`search`)">Cerca</button>
    </section>
</template>

<style lang="scss" scoped>
</style>