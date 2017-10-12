const express = require('express');
const app = express();

/* Middlewares */
app.set('view engine', 'pug');
app.use(express.static('public'));

/* Routes */
app.get('/', function (req, res) {
	res.render('confessional');
});

/* 3, 2, 1, Launch ! */
app.listen(process.env.PORT || 3000, function() {
	console.log('App is up and running!');
});