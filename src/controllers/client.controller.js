const Client = require('../models/client.model');

//const bcrypt = require('bcrypt');

exports.create = (req, res) => {
    console.log(req.body);
        const client = new Client({
                nom: req.body.nom,
                prenom: req.body.prenom,
                adresse: req.body.adresse
                // datecreation: req.body.datecreation
            })
            client.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                })
            })
    }

exports.findOne = (req, res) => {
    Client.findById(req.params.id)
        .then(client => {
            if (!client) {
                return res.status(404).send({
                    message: "Pas de client a l'id suivant" + req.params.id
                });
            }
            res.send(client);
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}


exports.updateOne = (req, res) => {
    Client.findByIdAndUpdate(
        req.params.id,
        req.body
    ).then(client => {
        if (!client) {
            return res.status(404).send({
                message: "Pas de Client a l'id suivant" + req.params.id
            })
        }
        Client.findById(req.params.id)
            .then(newClient => {
                res.send({
                    new_client: newClient,
                    old_client: client
                });
            })
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

exports.deleteOne = (req, res) => {
    Client.findByIdAndRemove(req.params.id)
        .then(client => {
            if (!client) {
                return res.status(404).send({
                    message: "Pas de client a l'id suivant" + req.params.id
                })
            }
            res.send({
                message: `client avec l'id ${req.params.id} supprmié`
            })
        })
}

exports.findall = (req, res) => {
    Client.find()
    .then(client => {
        res.send(client);
    })
    .catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
    
}
