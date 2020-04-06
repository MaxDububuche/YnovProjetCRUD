const express = require('express');
const router = express.Router();
const manager = require('../controllers/manager.controller');
const verifyToken = require('../helpers/verifyToken');


router.post('/manager', manager.create);
router.get('/managerfind/:id', manager.findOne);
router.post('/managerupdate/:id', manager.updateOne);
router.delete('/managerdelete/:id', manager.deleteOne);

module.exports = router;