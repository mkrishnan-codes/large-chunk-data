const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const compression = require('compression');
const data = require('./data/words.json')
const smallData = require('./data/smallwords.json');
app.get('/get-xxl', function (req, res) {
	console.log('Sending xxl data')
	res.json(data);
  })
  app.get('/get-xs', function (req, res) {
	console.log('Sending xs data')
	res.json(smallData);
  })
  app.get('*', function (req, res) {
	res.status(404).end();
  })
console.log(`🚀🚀🚀 Starting web server at ${PORT}`);
app.use(compression());
app.listen(PORT);
