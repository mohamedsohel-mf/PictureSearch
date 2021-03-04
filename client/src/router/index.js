import Vue from "vue";
import Router from "vue-router";
import GeopicSearch from "@/components/GeopicSearch";
import AddLocation from "@/components/AddLocation.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "GeopicSearch",
            component: GeopicSearch,
        },
        {
            path: "/addlocation",
            name: "AddLocation",
            component: AddLocation,
        },
    ],
});
