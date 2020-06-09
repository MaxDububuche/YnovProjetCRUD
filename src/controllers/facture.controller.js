const Facture = require('../models/facture.model');

exports.create = (req, res) => {
        const facture = new Facture({
                client: req.body.client,
                datemission: req.body.datemission,
                payer: req.body.payer,
                datepaiment: req.body.datepaiment,
                prix: req.body.prix,
                reference: req.body.reference
            })
        facture.save()
            .then(data => {
                res.redirect('http://localhost:3000/fruitjuice/factures');
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                })
            })
    }

exports.findOne = (req, res) => {
    Facture.findById(req.params.id)
        .then(facture => {
            if (!facture) {
                return res.status(404).send({
                    message: "Pas de Facture a l'id suivant" + req.params.id
                });
            }
            res.send(facture);
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.updateOne = (req, res) => {
    Facture.findByIdAndUpdate(
        req.params.id,
        req.body
    ).then(facture => {
        if (!facture) {
            return res.status(404).send({
                message: "Pas de Golf a l'id suivant" + req.params.id
            })
        }
        Facture.findById(req.params.id)
            .then(newFacture => {
                res.redirect('http://localhost:3000/fruitjuice/factures');
                res.send({
                    new_facture: newFacture,
                    old_facture: facture
                });
            })
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

exports.deleteOne = (req, res) => {
    Facture.findByIdAndRemove(req.params.id)
        .then(facture => {
            if (!facture) {
                return res.status(404).send({
                    message: "Pas de Facture a l'id suivant" + req.params.id
                })
            }
            res.redirect('http://localhost:3000/fruitjuice/factures');
            res.send({
                message: `Facture avec l'id ${req.params.id} supprmié`
            })
        })
}

exports.findall = (req, res) => {
    Facture.find()
    .then(facture => {
        res.send(facture);
    })
    .catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
    
}


exports.search = (req,res) => {
    Facture.findById(req.body.id)
        .then(facture => {
            if (!facture) {
                return res.status(404).send({
                    message: "Pas de facture a l'id suivant" + req.body.id
                });
            }
            res.redirect(`http://localhost:3000/fruitjuice/facture/${req.body.id}`);
            res.send(facture);
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}