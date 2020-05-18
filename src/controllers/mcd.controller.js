const Client = require("../models/client.model");
const Produit = require("../models/produit.model");
const Facture = require("../models/facture.model");
const User = require("../models/user.model");


exports.mcdclient = (req, res) => {
    res.send(JSON.stringify(Client.schema.obj));
}

exports.mcdproduit = (req, res) => {
    res.send(JSON.stringify(Produit.schema.obj));
}

exports.mcdfacture = (req, res) => {
    res.send(JSON.stringify(Facture.schema.obj));
}

exports.mcduser = (req, res) => {
    res.send(JSON.stringify(User.schema.obj));
}
