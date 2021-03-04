import axios from 'axios'

export const getFlickerPhoto = (page, place, latlong) => {
    console.log("PF:: ", page)
    let url = `api/flicker/search?page=${page}&`;
    if(place) {
        url = url + `place=${place}`;
    }
    if(latlong) {url = url + `latlong=${latlong}`}
    return axios.get(url)
}

export const getLocationInfo = () => {
    return axios.get('api/locations')
}

export const addLocationInfo = (place, lat, long) => {
    let url = 'api/add/location?';
    if(place) {
        url = url + `place=${place}`;
    }
    if(lat && long) url = url + `lat=${lat}&long=${long}`
    return axios.post(url)
}