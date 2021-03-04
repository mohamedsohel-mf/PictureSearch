/* eslint-disable vue/no-side-effects-in-computed-properties */
<template>
    <b-container>
        <b-row>
            <b-col md="4">
                <div class="mb-2">Place: {{inputplace}}</div>
                <b-form-select
                    v-model="inputplace"
                    :options="setLoc"
                    :disabled="inputlatlong !== null"
                    label="Place"
                ></b-form-select>
            </b-col>
            <b-col md="4">
                <div class="mb-2">Lat-Long: {{inputlatlong}}</div>
                <b-form-select
                    v-model="inputlatlong"
                    :options="setLatlong"
                    :disabled="inputplace !== null"
                ></b-form-select>
            </b-col>
            <b-col md="2">
                <div class="mb-4"></div>
                <b-button @click="resetSearch" variant="info">Reset</b-button>
            </b-col>
            <b-col md="2">
                <div class="mb-4"></div>
                <b-button @click="getSearchPic" variant="info">Search</b-button>
            </b-col>
        </b-row>
        <b-row class="my-3">
            <b-col md="3" v-for="(photo, index) in photos" :key="index">
                <b-img
                    thumbnail
                    fluid
                    :src="photo.url_n"
                    :alt="photo.title"
                ></b-img>
            </b-col>
        </b-row>
        <!-- <pagination-value :perPage="perPage" :rows="rows" /> -->
        <b-pagination
            v-if="allPages > 1"
            v-model="page"
            :total-rows="allPages"
            :per-page="perPage"
            aria-controls="bitcoin-table"
            align="center"
            @change="getSearchPic"
        ></b-pagination>
    </b-container>
</template>

<script>
// import { delete } from 'vue/types/umd';
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            inputplace: null,
            inputlatlong: null,
            option: [],
            latlong: [],
            page: 1
        };
    },
    methods: {
        getSearchPic(value=null) {
            if(value) {
                this.page = value
            }
            let payload = {
                place: this.inputplace,
                page: this.page,
                latlong: this.inputlatlong
            };
            this.$store.dispatch("getPics", payload);
        },
        resetSearch() {
            this.inputplace = null
            this.inputlatlong = null
        }
    },
    mounted() {
        this.$store.dispatch("locationInfo");
    },
    computed: {
        ...mapGetters(["photos", "currentPage", "allPages", "perPage", "locationsInfo"]),
        setLoc: function() {
            let resArr = this.locationsInfo.map((res) => {
                return res.place
            })
            return resArr = resArr.filter(function(ele) {
                return ele !== undefined
            })
        },
        setLatlong: function() {
            let resArr = this.locationsInfo.map((res) => {
                return res.latlong
            })
            return resArr = resArr.filter(function(ele) {
                return ele !== undefined
            })
        }
    },
};
</script>

<style>
.page-item.active .page-link {
    background-color: #52a3b8 !important;
    border-color: #52a3b8 !important;
}
</style>
