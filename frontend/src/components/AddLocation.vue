<template class="addlocation">
    <b-container fluid="xs">
        <nav-bar :navTitle="navTitle" :navLink="navLink" />
        <header-bar :headerTitle="headerTitle" />
        <b-container class="justify-content-md-center">
            <b-row>
                <b-col md="6">
                    <b-form-input
                        v-model="placeName"
                        placeholder="Enter Place Name"
                        class="mb-2"
                    ></b-form-input>
                    <!-- <div class="my-2">Value: {{ placeName }}</div> -->
                    <b-button @click="addLocation" variant="info">Add</b-button>
                </b-col>
                <b-col md="6">
                    <b-form-input
                        v-model="latValue"
                        placeholder="Enter Latitude Value"
                    ></b-form-input>
                    <!-- <div class="mt-2">Value: {{ latValue }}</div> -->
                    <b-form-input
                        v-model="longValue"
                        placeholder="Enter Longititude Value"
                        class="my-2"
                    ></b-form-input>
                    <!-- <div class="my-2">Value: {{ longValue }}</div> -->
                    <b-button @click="addLatLong" variant="info">Add</b-button>
                </b-col>
            </b-row>
        </b-container>
        <!-- <b-toast id="example-toast" title="Success" static no-auto-hide>
            Your data has been added successfully.
        </b-toast> -->
    </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "./navbar/NavBar";
import HeaderBar from "./header/HeaderBar";
// import SearchBar from "./searchbar/SearchBar";

export default {
    name: "AddLocation",
    components: {
        NavBar,
        HeaderBar,
        // SearchBar,
    },
    data() {
        return {
            navTitle: "GeoPic",
            placeName: "",
            latValue: "",
            longValue: "",
            headerTitle: "Add Location for Picture Search",
            navLink: "Pic Search",
        };
    },
    methods: {
        addLocation() {
            let payload = {
                place: this.placeName,
            };
            this.$store.dispatch("addLocationsInfo", payload).then((res) => {
                if(res.state == true) {
                    alert("Your data has been added successfully");
                }
            });
        },
        addLatLong() {
            let payload = {
                lat: this.latValue,
                long: this.longValue,
            };
            this.$store.dispatch("addLocationsInfo", payload).then((res) => {
                if(res.state == true) {
                    alert("Your data has been added successfully");
                }
            });
        },
    },
    computed: {
        ...mapGetters(["addLocations"]),
    },
};
</script>

<style scoped></style>
