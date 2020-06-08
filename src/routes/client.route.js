const express = require('express');
const router = express.Router();
const client = require('../controllers/client.controller');
const axios = require('axios');


router.post('/clientcreate', client.create);
router.get('/clientfind/:id', client.findOne);
router.get('/clientfindall', client.findall);
router.post('/clientupdate/:id', client.updateOne);
router.post('/clientdelete/:id', client.deleteOne);


router.get('/client/add', function (req, res) {
    res.render('client/add');
});

router.get('/client/:id', function (req, res) {
    axios
    .get(`http://localhost:3000/fruitjuice/clientfind/${req.params.id}`)
    .then(unwrapResponseData)
    .then(client => res.render('client/listone', {client: client}));
});

router.get('/client/edit/:id', function (req, res) {
    res.render('client/edit', { id: req.params.id });
});

router.get('/clients', function (req, res) {
    axios
    .get('http://localhost:3000/fruitjuice/clientfindall')
    .then(unwrapResponseData)
    .then(clients => res.render('client/list', {clients: clients}));
});

function unwrapResponseData(response) {
    return response.data; 
}

module.exports = router;
