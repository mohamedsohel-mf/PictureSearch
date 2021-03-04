<template>
    <b-container fluid="xs">
        <nav-bar :navTitle="navTitle" :navLink="navLink" />
        <header-bar :headerTitle="headerTitle" />
        <b-container class="justify-content-md-center">
            <search-bar />
        </b-container>
    </b-container>
</template>

<script>
import NavBar from "./navbar/NavBar";
import HeaderBar from "./header/HeaderBar";
import SearchBar from "./searchbar/SearchBar";

export default {
    name: "GeopicSearch",
    components: {
        NavBar,
        HeaderBar,
        SearchBar,
    },
    data() {
        return {
            navTitle: "GeoPic",
            headerTitle: "Picture Search By Geolocation",
            navLink: "Add Location"

        };
    },
};
</script>

<style scoped>

</style>
