const express = require('express');
const mustache = require('mustache-express');

const app = express();
app.engine('mustache', mustache());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  res.render('index')
});







app.listen(2315, function() {
  console.log('Listening on port 2315.');
});
