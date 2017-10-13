const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/* Middlewares */
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

/* Routes */
app.get('/', function (req, res) {
	if (req.query.code) {
		res.render('status', {code: req.query.code, responseText: "Success!", url: "https://twitter.com/iConfessionnal"})
	}
	else {
		res.render('confessional');
	}
});

app.post('/api/publish', function (req, res) {
	const body = req.body;
	if (body.turing != '') {
		res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ'); // Bot Rick'roll
	}
	else {
		//res.send({code: "200", responseText: "Success!", url: "https://twitter.com/iConfessionnal"});
		res.redirect('/?code=200');
	}
});

/* 3, 2, 1, Launch ! */
app.listen(process.env.PORT || 3000, function() {
	console.log('App is up and running!');
});