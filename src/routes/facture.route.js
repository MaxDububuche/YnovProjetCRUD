const express = require('express');
const router = express.Router();
const facture = require('../controllers/facture.controller');
const axios = require('axios');
const verifyToken = require('../helpers/verifyToken');


router.post('/facturecreate', facture.create);
router.get('/facturefind/:id', facture.findOne);
router.get('/facturefindall', facture.findall);
router.post('/factureupdate/:id', facture.updateOne);
router.post('/facturedelete/:id', facture.deleteOne);

router.get('/facture/add', function (req, res) {
    res.render('facture/add');
});

router.get('/facture/edit/:id', function (req, res) {
    res.render('facture/edit', { id: req.params.id });
});

router.get('/factures', function (req, res) {
    axios
    .get('http://localhost:3000/fruitjuice/facturefindall')
    .then(unwrapResponseData)
    .then(factures => res.render('facture/list', {factures: factures}));
});

function unwrapResponseData(response) {
    return response.data; 
}
module.exports = router;