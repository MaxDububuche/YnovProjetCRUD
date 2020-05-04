const express = require('express');
const router = express.Router();
const clientRouter = require('./client.route');
const produitRouter = require('./produit.route');
const factureRouter = require('./facture.route');

router.use(clientRouter);
router.use(produitRouter);
router.use(factureRouter);

module.exports = router;