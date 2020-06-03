const express = require('express');
const router = express.Router();
const produit = require('../controllers/produit.controller');
const axios = require('axios');
//const verifyToken = require('../helpers/verifyToken');


router.post('/produitcreate', produit.create);
router.get('/produitfind/:id', produit.findOne);
router.get('/produitfindall', produit.findall);
router.post('/produitupdate/:id', produit.updateOne);
router.post('/produitdelete/:id', produit.deleteOne);

router.get('/produit/add', function (req, res) {
    res.render('produit/add');
});

router.get('/produit/edit/:id', function (req, res) {
    res.render('produit/edit', { id: req.params.id });
});

router.get('/produits', function (req, res) {
    axios
    .get('http://localhost:3000/fruitjuice/produitfindall')
    .then(unwrapResponseData)
    .then(produits => res.render('produit/list', {produits: produits}));
});

function unwrapResponseData(response) {
    return response.data; 
}
module.exports = router;