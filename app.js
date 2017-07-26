const express = require('express');
const mustache = require('mustache-express');
const data = require('./data');
const app = express();
app.engine('mustache', mustache());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.use(express.static('public'))

app.get('/', function(req, res) {
  res.render('index', data)
});

app.get('/details/:id',function(req, res){



  let Users = data.users.find(function(item){
    return item.id == req.params.id;
  });
  res.render('details', person);

});







app.listen(2315, function() {
  console.log('Listening on port 2315.');
});
