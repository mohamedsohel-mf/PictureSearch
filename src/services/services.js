require("dotenv").config();
const axios = require("axios");

const getPhoto = async (page, place, lat, long) => {
    console.log("PLACE:: ", place)
    try {
        const response = await axios.get(
            "https://api.flickr.com/services/rest",
            {
                params: {
                    method: "flickr.photos.search",
                    api_key: process.env.API_KEY,
                    tags: place,
                    extras: "url_n, owner_name, date_taken, views",
                    page: page,
                    lat: lat,
                    lon: long,
                    format: "json",
                    nojsoncallback: 1,
                    per_page: 10,
                },
            }
        );
        // console.log("response: ", response)
        return response.data;
    } catch (err) {
        return err;
    }
};

const addPhoto = async (picId) => {
    try {
        const response = await axios.get(
            "https://api.flickr.com/services/rest",
            {
                params: {
                    method: "flickr.favorites.add",
                    api_key: process.env.API_KEY,
                    photo_id: picId,
                    format: "json",
                    // nojsoncallback: 1,
                    // per_page: 30,
                },
            }
        );
        console.log("response: ", response)
        return response.data;
    } catch (err) {
        return err;
    }
};
module.exports = {
    getPhoto,
    addPhoto
};
