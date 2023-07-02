var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights');


// GET /flights
router.get('/', flightsCtrl.index);

router.get('/new', flightsCtrl.new);


module.exports = router;
