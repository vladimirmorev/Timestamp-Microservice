var express = require('express');
var app = express();

app.get('/', function (req, res) {  
  res.sendFile(__dirname + '/index.html');
});

function unixDate() {
  
}

function naturalDate() {

}

app.get('/:query', function (req, res) {
  var date = new Date(req.params.query);
  res.json( {"unix":123,"natural":23});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});