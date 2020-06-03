const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controller');

router.post('/auth/register/', user.create);
router.post('/auth/login', user.login);


router.get('/login', function (req, res) {
    res.render('user/login');
});

router.get('/register', function (req, res) {
    res.render('user/register');
});

module.exports = router;