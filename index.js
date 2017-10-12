const express = require('express');
const app = express();

/* Middlewares */
app.set('view engine', 'pug');
app.use(express.static('public'));

/* Routes */
app.get('/', function (req, res) {
	res.render('confessional');
});