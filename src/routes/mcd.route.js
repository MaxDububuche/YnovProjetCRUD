const express = require('express');
const router = express.Router();
const mcd = require('../controllers/mcd.controller');


router.get('/mcdclient', mcd.mcdclient);
router.get('/mcdproduit', mcd.mcdproduit);
router.get('/mcdfacture', mcd.mcdfacture);
router.get('/mcduser', mcd.mcduser);


module.exports = router;