var express = require('express');
var router = express.Router();
var controllerMain = require('../controllers/main.js');

/* GET home page. */
router.get('/', controllerMain.index);
router.get('/vacations', controllerMain.vacations);

module.exports = router;
