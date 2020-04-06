const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const golfSchema = new Schema({
    titre: {
        type: String,
        required: true,
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
    },
    manager: {
        type: String,
        required: true,
        unique: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Golf', golfSchema);