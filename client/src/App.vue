<template>
    <div id="app">
        <router-view>
        <GeopicSearch />
        </router-view>
    </div>
</template>

<script>
import GeopicSearch from "./components/GeopicSearch.vue";

export default {
    name: "App",
    components: {
        GeopicSearch,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
