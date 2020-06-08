const express = require('express');
const router = express.Router();
const UserRouter = require('./user.route');
const ClientRouter = require('./client.route');
const FactureRouter = require('./facture.route');
const ProductRouter = require('./produit.route');
const McdRouter = require('./mcd.route');
const HomeRouter = require('./home.route');




router.use(UserRouter);
router.use(ClientRouter);
router.use(FactureRouter);
router.use(ProductRouter);
router.use(McdRouter);
router.use(HomeRouter);




module.exports = router;















