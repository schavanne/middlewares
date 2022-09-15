const router = require('express').Router();

const {index, contact, about, services, admin, login} = require('../controllers/mainController');

const adminCheck = require('../middlewares/admindCheck');

router
    .get('/', index)
    .get('/contact', contact)
    .get('/about', about)
    .get('/services', services)
    .get('/admin',adminCheck, admin)
    .get('/login', login)

module.exports = router;