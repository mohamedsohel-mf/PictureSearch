const mongoose = require('mongoose');

const favpicSchema = new mongoose.Schema({
    picId: {
        type: String,
        trim: true
    },
    picURL: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
})

const Favpic = mongoose.model('Favpic', favpicSchema);
module.exports = Favpic;