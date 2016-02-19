var express = require('express');
var moment = require('moment');

var app = express();

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {  
  res.sendFile(__dirname + '/index.html');
});

function unixToNatural(unix) {
  return moment.unix(unix).format('MMMM D, YYYY');
}

function naturalToUnix(natural) {
  return moment(natural, 'MMMM D, YYYY').format('X');
}

app.get('/:query', function (req, res) {
  var date = req.params.query;  
  var obj = {'unix':null,'natural':null};
  if (isNaN(+date) && moment(date, "MMMM D, YYYY").isValid()) {
    obj.unix = naturalToUnix(date);
    obj.natural = unixToNatural(obj.unix);
  } 
  if (+date >= 0){ 
    obj.unix = +date;
    obj.natural = unixToNatural(obj.unix);
  }
  res.json(obj);
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});