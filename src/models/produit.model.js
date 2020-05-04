const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produitSchema = new Schema({
    nom: {
        type: String,
        required: true,
    },
    stock: {
        type: Integer,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    prix: {
        type: String,
        required: true,
    },
    reference: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('User', userSchema);