const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const factureSchema = new Schema({
    client: {
        type: String,
        required: true
    },
    datemission: {
        type: String,
        required: true
    },
    payer: {
        type: Booleean,
        required: true
    },
    datepaiment: {
        type: String,
        required: true
    },
    prix: {
        type: Int,
        required: true
    },
    reference: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Facture', factureSchema);