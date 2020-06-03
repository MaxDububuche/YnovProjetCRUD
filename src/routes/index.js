const express = require('express');
const router = express.Router();
const UserRouter = require('./user.route');
const ClientRouter = require('./client.route');
const FactureRouter = require('./facture.route');
const ProductRouter = require('./produit.route');
const McdRouter = require('./mcd.route');




router.use(UserRouter);
router.use(ClientRouter);
router.use(FactureRouter);
router.use(ProductRouter);
router.use(McdRouter);



module.exports = router;

// app.set('view engine', 'pug')
// app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
// app.use(express.static('public'))
// app.use(methodOverride('_method'))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({

// extended: true
// }))














