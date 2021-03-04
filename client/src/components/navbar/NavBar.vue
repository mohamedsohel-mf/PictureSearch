<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-container class="justify-content-md-left">
            <b-navbar-brand href="/">{{ title }}</b-navbar-brand>
            <b-navbar-toggle target="navbar-toggle-collapse">
                <!-- <template #default="{ expanded }">
                    <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                    <b-icon v-else icon="chevron-bar-down"></b-icon>
                </template> -->
            </b-navbar-toggle>
            <b-collapse id="navbar-toggle-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item
                        ><router-link style="color: white !important" v-if="navLink == 'Add Location'" to="/addlocation">
                        {{
                            navLink
                        }}
                        </router-link>
                        <!-- <router-link v-else to="/">{{navLink}}</router-link> -->
                        </b-nav-item
                    >
                    <!-- <b-nav-item href="#">Link 2</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
export default {
    name: "TopBar",
    props: ["navTitle", "navLink"],
    data() {
        return {
            title: this.navTitle,
        };
    },
};
</script>

<style>
    myColor {
        color: white !important;
    }
</style>
