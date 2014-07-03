 /***
* Merxz
*
* Author                : Jumana Shireen (jumana.shireen14@gmail.com)
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

//var url = require( "url" );

var app = express();
// set port number to be communicated with
app.set('port', process.env.PORT || 8547);


app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));



/*
 *function for handling post request
 *@param path
 *param function callback(Request,Response)
*/
app.post('/test/:number', function(req,res){
	
	console.log(req.body);
	
	// returns response in valid json format.
	res.json({number : req.params.number, user :  req.query.user, check : req.body.check, checkAnother : req.body.checkAnother } );
});

//listen for request at specified port number
app.listen(8547);

