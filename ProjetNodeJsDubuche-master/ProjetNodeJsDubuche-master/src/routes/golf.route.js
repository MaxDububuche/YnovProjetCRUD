const express = require('express');
const router = express.Router();
const golf = require('../controllers/golf.controller');
const verifyToken = require('../helpers/verifyToken');


router.post('/golf', golf.create);
router.get('/golffind/:id', golf.findOne);
router.post('/golfupdate/:id', golf.updateOne);
router.delete('/golfdelete/:id', golf.deleteOne);

module.exports = router;