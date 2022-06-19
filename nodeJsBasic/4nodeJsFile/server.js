var express = require('express');
var fileservice = require('./fileservice');

const app = express();
const router = express.Router();

var PORT = 3000;

router.get('/', async function(req, res) {
		 res.status(200).send('choose an action please');
});

router.get('/list', async function(req, res) {
	 
	 try {
		 // 'query' is our extended function.
		 var resultService = await fileservice.list()
		  
	     res.status(200).send(resultService);
      } catch(err) {
	     console.log('err in service', err);
		 res.status(200).send({err: err});
	  }
});

router.get('/add', async function(req, res) {
	 
	 try {
		 // 'query' is our extended function.
		 var resultService = await fileservice.add()
		  
	     res.status(200).send(resultService);
      } catch(err) {
	     console.log('err in service', err);
		 res.status(200).send({err: err});
	  }
});

router.get('/showContent/:fileName', async function(req, res) {
	 
	 try {
		 // 'query' is our extended function.
		 var resultService = await fileservice.showContent(req.params.fileName);
		  
	     res.status(200).send(resultService);
      } catch(err) {
	     console.log('err in service', err);
		 res.status(200).send({err: err});
	  }
});

app.use('/', router);

app.listen(PORT, function() {
    console.log('Test listing Files: go to http://localhost:3000/list');
    console.log('Test adding file: go to http://localhost:/add');
    console.log('Test reading file content: go to http://localhost:/showContent/{fileName}');
});
