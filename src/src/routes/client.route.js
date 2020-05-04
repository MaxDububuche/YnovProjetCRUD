const express = require('express');
const router = express.Router();
const client = require('../controllers/client.controller');
const verifyToken = require('../helpers/verifyToken');


router.post('/clientcreate', client.create);
router.get('/clientfind/:id', client.findOne);
router.post('/clientupdate/:id', client.updateOne);
router.delete('/clientdelete/:id', client.deleteOne);

module.exports = router;