const express = require('express');
const router = express.Router();
const UserRouter = require('./user.route');
const ClientRouter = require('./client.route');
const FactureRouter = require('./facture.route');
const ProductRouter = require('./produit.route');

router.use(UserRouter);
router.use(ClientRouter);
router.use(FactureRouter);
router.use(ProductRouter);

module.exports = router;