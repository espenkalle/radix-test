var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    console.log('Velkommen!');
    res.render('index', { title: 'Radix Workshop' });
});

router.get('/healthz', function(req, res){
    res.status(200).send();
});

module.exports = router;
