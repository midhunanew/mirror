 /***
* Mirror
*
* Author                : Anilda Lopez (anildalopez14@gmail.com)
* Company               : Toobler
* Email:                : info@toobler.com
* Web site              : http://www.toobler.com
* Created               : 3/July/2014
* Description           : Server for managing post method
* ==============================================================================================
* Change History:
* ----------------------------------------------------------------------------------------------
* Sl.No.  Date   Author   Description
* ----------------------------------------------------------------------------------------------
*
* 
*/
var express = require('express');
var bodyParser = require('body-parser');
//create application
var app = express();
// makes server be able to accept a parameter from the environment what port to listen on.
app.set('port', process.env.PORT || 8547);

 // to support URL-encoded bodies
app.use(bodyParser.urlencoded());
 // to support JSON-encoded bodies
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


/*
*function to POST data
*@param path
*@param callback function(object,object)
*/
app.post('/test/:number', function(req,res){
	console.log('ddd');
	console.log(req.body);
    //for responding in valid JSON format 
	res.json({number : req.params.number , user : req.query.user , check : req.body.check, checkAnother : req.body.checkAnother});
	console.log(req.route);
});

//listen for request at specified port number
app.listen(8547);