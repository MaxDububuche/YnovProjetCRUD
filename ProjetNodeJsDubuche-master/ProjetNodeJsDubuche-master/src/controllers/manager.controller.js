const Manager = require('../models/manager.model');
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
        let hashedPassword = bcrypt.hashSync(req.body.password, 8);
        console.log(hashedPassword);
        const manager = new Manager({
                nom: req.body.nom,
                prenom: req.body.prenom,
                mail: req.body.mail,
                telephone: req.body.telephone
            })
            manager.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                })
            })
    }

exports.findOne = (req, res) => {
    console.log(req.params);
    Manager.findById(req.params.id)
        .then(manager => {
            if (!manager) {
                return res.status(404).send({
                    message: "Pas de Manager a l'id suivant" + req.params.id
                });
            }
            res.send(manager);
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.updateOne = (req, res) => {
    Manager.findByIdAndUpdate(
        req.params.id,
        req.body
    ).then(manager => {
        if (!manager) {
            return res.status(404).send({
                message: "Pas de Manager a l'id suivant" + req.params.id
            })
        }
        Manager.findById(req.params.id)
            .then(newManager => {
                res.send({
                    new_manager: newManager,
                    old_manager: manager
                });
            })
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

exports.deleteOne = (req, res) => {
    Manager.findByIdAndRemove(req.params.id)
        .then(manager => {
            if (!manager) {
                return res.status(404).send({
                    message: "Pas de Manager a l'id suivant" + req.params.id
                })
            }
            res.send({
                message: `Manager avec l'id ${req.params.id} supprimé`
            })
        })
}