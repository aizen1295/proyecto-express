const express = require('express');
const router = express.Router();

//requerir controladores
const home = require('../controllers/home');

//vista principal
router.get('/', home.index);

module.exports = router;
