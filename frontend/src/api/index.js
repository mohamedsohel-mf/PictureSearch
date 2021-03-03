import axios from 'axios'

export const getFlickerPhoto = (page, place, latlong) => {
    console.log("PF:: ", page)
    let url = `http://localhost:3000/api/flicker/search?page=${page}&`;
    if(place) {
        url = url + `place=${place}`;
    }
    if(latlong) {url = url + `latlong=${latlong}`}
    return axios.get(url)
}

export const getLocationInfo = () => {
    return axios.get('http://localhost:3000/api/locations')
}

export const addLocationInfo = (place, lat, long) => {
    let url = 'http://localhost:3000/api/add/location?';
    if(place) {
        url = url + `place=${place}`;
    }
    if(lat && long) url = url + `lat=${lat}&long=${long}`
    return axios.post(url)
}