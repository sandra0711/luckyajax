let express = require('express');
let router = express.Router();
const Die = require('../models/die');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

// TODO: изменить данный маршрутизатор с использованием AJAX
router.post('/rolls', function (req, res) {
    let die = new Die(Number(req.body.sides));
    res.render('index', {die: die, roll: die.roll()});
});

module.exports = router;
