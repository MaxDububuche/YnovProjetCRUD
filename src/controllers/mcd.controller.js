const Client = require("../models/client.model");
const Produit = require("../models/produit.model");
const Facture = require("../models/facture.model");
const User = require("../models/user.model");


exports.mcdclient = (req, res) => {
    res.send(JSON.stringify(Client.schema.obj)+
    "nom: { type: String, required: true }, prenom: { type: String, required: true }, adresse: {type: String, required: true }");
}

exports.mcdproduit = (req, res) => {
    res.send(JSON.stringify(Produit.schema.obj)+
    "nom: { type: String, required: true }, stock: { type: Number, required: true, },  photo: { type: String, required: true }, prix: { type: Number, required: true }, reference: { type: String,  required: true,   },");
}

exports.mcdfacture = (req, res) => {
    res.send(JSON.stringify(Facture.schema.obj)+
    " client: { type: String, required: true }, datemission: { type: String, required: true }, payer: { type: String, required: true }, datepaiment: { type: String, required: true }, prix: { type: Number, required: true }, reference: { type: String, required: true  },");
}

exports.mcduser = (req, res) => {
    res.send(JSON.stringify(User.schema.obj)+
    "nom: { type: String, required: true, },  prenom: { type: String, required: true, }, mail: { type: String, required: true, }, motdepasse: { type: String, required: true,  }, admin:{ type: Boolean  }");
}
