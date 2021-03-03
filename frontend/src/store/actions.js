import { getFlickerPhoto, getLocationInfo, addLocationInfo } from "../api";

export const getPics = ({ commit }, payload) => {
    getFlickerPhoto(payload.page, payload.place, payload.latlong).then(
        ({ data }) => {
            console.log("DATA: ", data);
            let pics = data.data.photos.photo;
            let currentPage = data.data.photos.page;
            let allPages = data.data.photos.pages;
            let perPage = data.data.photos.perpage
            commit("SET_PICS", {
                pics,
            });
            commit("SET_CURRENT_PAGE", {
                currentPage,
            });
            commit("SET_ALL_PAGE", {
                allPages,
            });
            commit("SET_PER_PAGE", {
                perPage,
            });
        }
    );
};

export const addLocationsInfo = async({ commit }, payload) => {
    let res = {};
    await addLocationInfo(payload.place, payload.lat, payload.long).then(
        ({ data }) => {
            // console.log("DATA: ", data);
            res.state = true
            let addLocations = data.data;
            
            commit("ADD_LOCATION_INFO", {
                addLocations,
            });
        }
        
    );
    return res
    
};

export const locationInfo = ({ commit }) => {
    getLocationInfo().then(
        ({ data }) => {
            // console.log("DATA: ", data);
            let locationsInfo = data.data;
            commit("SET_LOCATION_INFO", {
                locationsInfo,
            });
        }
    );
};
