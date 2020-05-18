const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');

router.post('/auth/register/', user.create);
router.post('/auth/login', user.login);

module.exports = router;