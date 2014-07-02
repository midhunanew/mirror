var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', process.env.PORT || 8547);


app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))


/*
app.set('views', path.join(“/directory/”, 'views'));
app.set('view engine', 'jade');
app.get('/', function(req, res){
req.params('name')
});
*/

app.post('/test/:number', function(req,res){
	console.log('ddd');
	console.log(req.body)

	res.json({number : req.params.number , user : req.query.user , check : req.body.check, checkAnother : req.body.checkAnother});
	console.log(req.route);
});


app.listen(8547);