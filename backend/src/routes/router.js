const express = require("express");
const router = express.Router();
const flickerAPI = require("./../services/services");
const Location = require("./../models/geoLlocation");
const Favplace = require("../models/favPic");
const Favpic = require("../models/favPic");

router.post("/add/location", async (req, res, next) => {
    const location = new Location({
        place: req.query.place,
        latlong: req.query.lat + ", " + req.query.long,
    });
    try {
        await location.save();
        res.status(201).json({
            message: "You have successfullly saved location info",
            request: {
                type: "POST",
                url: "",
            },
            data: location,
        });
    } catch (err) {
        res.status(400).json({
            error: err,
        });
    }
});

router.get("/locations", async (req, res, next) => {
    try {
        let filter = {};
        const allLocations = await Location.find(filter);
        res.status(201).json({
            message: "You have successfullly saved location info",
            request: {
                type: "POST",
                url: "",
            },
            data: allLocations,
        });
    } catch (err) {
        res.status(400).json({
            error: err,
        });
    }
});

router.get("/flicker/search", async (req, res, next) => {
    let letlong = req.query.latlong;
    let lat;
    let long;
    if (letlong) {
        let arr = letlong.split(",").map(function (item) {
            return item.trim();
        });
        lat = parseFloat(arr[0]);
        long = parseFloat(arr[1]);
    } else {
        (lat = null), (long = null);
    }
    try {
        let place = req.query.place;
        let page = req.query.page;
        const all = await flickerAPI.getPhoto(page, place, lat, long);
        if (all.stat == "ok") {
            res.status(200).json({
                message: `You have succesfully got the result`,
                request: {
                    type: "GET",
                    url: "https://crud-backend-people.herokuapp.com/api/list",
                },
                data: all,
            });
        } else {
            res.status(404).json({
                message: all.message,
                request: {
                    type: "GET",
                    url: "https://crud-backend-people.herokuapp.com/api/list",
                },
                statusCode: all.stat,
            });
        }
    } catch (err) {
        res.status(500).json({
            error: err,
        });
    }
});

router.post("/add/favpic", async (req, res, next) => {
    const favpic = new Favpic({
        picId: req.body.picId,
        picURL: req.body.picURL,
    });
    try {
        await favpic.save();
        res.status(201).json({
            message: "You have successfullly saved location info",
            request: {
                type: "POST",
                url: "",
            },
            data: favpic,
        });
    } catch (err) {
        res.status(400).json({
            error: err,
        });
    }
})

router.get("/flicker/fav/add", async (req, res, next) => {
    try {
        const all = await flickerAPI.addPhoto("50991825671");
        if (all.stat == "ok") {
            res.status(200).json({
                message: `You have succesfully got the result`,
                request: {
                    type: "GET",
                    url: "https://crud-backend-people.herokuapp.com/api/list",
                },
                data: all,
            });
        } else {
            res.status(404).json({
                message: all.message,
                request: {
                    type: "GET",
                    url: "https://crud-backend-people.herokuapp.com/api/list",
                },
                statusCode: all.stat,
            });
        }
    } catch (err) {
        res.status(500).json({
            error: err,
        });
    }
});

module.exports = router;
