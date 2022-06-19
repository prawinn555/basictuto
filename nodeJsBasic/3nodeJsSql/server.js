var express = require('express');
var db = require('./db');


var app = express();

var PORT = 3000;

app.get('/', async function(req, res) {
	  var sql  = 'SELECT * from mydata';
	 
	 try {
		 // 'query' is our extended function.
		 var resultDB = await db.query(sql,[]);
		  
	     res.status(200).send(resultDB);
      } catch(err) {
	     console.log(err);
		 res.status(200).send('err '+err);
	  }
});


app.listen(PORT, function() {
    console.log('Test 1: go to http://localhost:3000');
});
