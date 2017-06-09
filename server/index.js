var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.sendFile(process.cwd() +  '/views/dest/app.html')
});

module.exports = router;
