var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/users', users);

/* GET a guid. */
router.get('/api/test', function(req, res, next)
{

	res.json({msg: "ok tested"});
});

module.exports = app;
