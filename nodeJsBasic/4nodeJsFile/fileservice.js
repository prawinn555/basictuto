const fsPromises = require('fs').promises;

// fsPromises offers better performance than Sync

var tmpDir = './tmp';


var count = 1;

var fileservice = {};

fileservice.list = async () => {
	let r = await fsPromises.readdir('.');
	return {
		status : 'OK',
		returnObject : r
	}
}
fileservice.showContent = async (fileName) => {
	let r = await fsPromises.readFile(fileName);
	console.log('result of reading', r);
	let dataString = r.toString();
	return {
		status : 'OK',
		returnObject : r,
		dateString : dataString
	}
}

fileservice.add = async () => {
	try {
	   await fsPromises.mkdir(tmpDir);
	} catch(err) {
	   // directory may exists already
	}
	let name = "file" +(count++)+".txt";
	let r =	await fsPromises.writeFile(tmpDir+'/'+name, 'data for ' +name);
	return {
		status : 'OK',
		name : name,
		returnObject : r,
	}
}

module.exports= fileservice;


