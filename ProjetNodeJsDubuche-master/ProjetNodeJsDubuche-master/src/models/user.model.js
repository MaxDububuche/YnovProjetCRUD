const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nom: {
        type: String,
        required: true,
    },
    prenom: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
    },
    motdepasse: {
        type: String,
        required: true,
    },
    admin:{
        type: Boolean
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);