var express = require('express');

var app = express();

var PORT = 3000;

app.get('/', function(req, res) {
    res.status(200).send('Hello world (with express library)');
});


app.get('/test', function(req, res) {
    res.status(200).send('Call Test');
});

app.listen(PORT, function() {
    console.log('Test 1: go to http://localhost:3000');
    console.log('test 2: Go to http://localhost:3000/test');
});
