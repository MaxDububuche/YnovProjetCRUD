const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    nom: {
        type: String,
        required: true,
    },
    prenom: {
        type: String,
        required: true,
    },
    adresse: {
        type: String,
        required: true,
    }
    // datecreation: {
    //     type: String
    // },
}, {
    timestamps: true
});

module.exports = mongoose.model('Client', clientSchema);