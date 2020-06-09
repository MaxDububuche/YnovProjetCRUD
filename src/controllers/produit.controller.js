const Produit = require('../models/produit.model');

exports.create = (req, res) => {
        const produit = new Produit({
                nom: req.body.nom,
                stock: req.body.stock,
                photo: req.body.photo,
                prix: req.body.prix,
                reference: req.body.reference
            })
            produit.save()
            .then(data => {
                res.redirect('http://localhost:3000/fruitjuice/produits');
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                })
            })
    }

exports.findOne = (req, res) => {
    console.log(req.params);
    Produit.findById(req.params.id)
        .then(produit => {
            if (!produit) {
                return res.status(404).send({
                    message: "Pas de Produit a l'id suivant" + req.params.id
                });
            }
            res.send(produit);
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.updateOne = (req, res) => {
    Produit.findByIdAndUpdate(
        req.params.id,
        req.body
    ).then(produit => {
        if (!produit) {
            return res.status(404).send({
                message: "Pas de produit a l'id suivant" + req.params.id
            })
        }
        Produit.findById(req.params.id)
            .then(newProduit => {
                res.redirect('http://localhost:3000/fruitjuice/produits');
                res.send({
                    new_produit: newProduit,
                    old_produit: produit
                });
            })
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

exports.deleteOne = (req, res) => {
    Produit.findByIdAndRemove(req.params.id)
        .then(produit => {
            if (!produit) {
                return res.status(404).send({
                    message: "Pas de produit a l'id suivant" + req.params.id
                })
            }
            res.redirect('http://localhost:3000/fruitjuice/produits');
            res.send({
                message: `produit avec l'id ${req.params.id} supprimé`
            })
        })
}

exports.findall = (req, res) => {
    Produit.find()
    .then(produit => {
        res.send(produit);
    })
    .catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
    
}


exports.search = (req,res) => {
    Produit.findById(req.body.id)
        .then(produit => {
            if (!produit) {
                return res.status(404).send({
                    message: "Pas de produit a l'id suivant" + req.body.id
                });
            }
            res.redirect(`http://localhost:3000/fruitjuice/produit/${req.body.id}`);
            res.send(produit);
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}