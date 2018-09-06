// server.js
// load the things we need
var express = require('express');
var request = require('request');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

console.log('backend service endpoint is: ' + process.env.BACKEND_SERVICE_ENDPOINT);

// index page
app.get('/', function(req, res) {
  // https://getbootstrap.com/docs/4.0/components/buttons/
  // btn-primary , btn-danger, btn-warning
  //
  backendService = 'localhost:8080';
  if (process.env.BACKEND_SERVICE_ENDPOINT) {
    backendService = process.env.BACKEND_SERVICE_ENDPOINT;
  }

  request('http://' + backendService, function(error, response, data) {
    if (!error && response.statusCode == 200) {
      console.log(
        'INFO: Response received successfully from backend service ' +
          backendService,
      );
      console.log('INFO: ' + data);
      obj = JSON.parse(data);
      res.render('pages/index', obj);
    } else {
      console.log(error);
    }
  });
});

app.listen(8000);

console.log('8000 is the magic port');
