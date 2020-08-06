const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const compression = require('compression');
const cors = require('cors')

var whitelist = ['http://localhost:3000','https://mist-dropdown.netlify.app']
var corsOptions = {
	origin: function (origin, callback) {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true)
		} else {
			callback(new Error('Not allowed by CORS'))
		}
	}
}


const data = require('./data/words.json')
const smallData = require('./data/smallwords.json');
app.get('/get-xxl', cors(corsOptions), (req, res) => {
	console.log('Sending xxl data')
	res.json(data);
})
app.get('/get-xs', cors(corsOptions), (req, res) => {
	console.log('Sending xs data')
	res.json(smallData);
})
app.get('*', (req, res) => {
	res.status(404).end();
})
console.log(`🚀🚀🚀 Starting web server at ${PORT}`);
app.use(compression());
app.listen(PORT);
