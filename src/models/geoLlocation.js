const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    place: {
        type: String,
        trim: true
    },
    latlong: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
})

locationSchema.methods.toJSON = function() {
    const location = this;
    const locationObject = location.toObject();
    delete locationObject.__v;
    return locationObject;
}

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;