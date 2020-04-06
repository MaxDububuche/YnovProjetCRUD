const Golf = require('../models/golf.model');
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
        const golf = new Golf({
                titre: req.body.titre,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                manager: req.body.manager
            })
        golf.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                })
            })
    }

exports.findOne = (req, res) => {
    Golf.findById(req.params.id)
        .then(golf => {
            if (!golf) {
                return res.status(404).send({
                    message: "Pas de Golf a l'id suivant" + req.params.id
                });
            }
            res.send(golf);
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.updateOne = (req, res) => {
    Golf.findByIdAndUpdate(
        req.params.id,
        req.body
    ).then(golf => {
        if (!golf) {
            return res.status(404).send({
                message: "Pas de Golf a l'id suivant" + req.params.id
            })
        }
        Golf.findById(req.params.id)
            .then(newGolf => {
                res.send({
                    new_golf: newGolf,
                    old_golf: golf
                });
            })
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

exports.deleteOne = (req, res) => {
    Golf.findByIdAndRemove(req.params.id)
        .then(golf => {
            if (!golf) {
                return res.status(404).send({
                    message: "Pas de Golf a l'id suivant" + req.params.id
                })
            }
            res.send({
                message: `Golf avec l'id ${req.params.id} supprmié`
            })
        })
}