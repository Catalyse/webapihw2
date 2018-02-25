var express = require('express');
var router = express.Router();

var username = 'catalyse';
var password = 'asdf';

router.get('/gets', function(req,res) {
  var response = new Object();
  response.type = "Request type is GET";
  response.headers = new Object();
  response.headers = req.headers;
  if(Object.keys(req.body).length > 0) {
    response.body = req.body;
  }
  else {
    response.body = "No body in request";
  }
  response.key = process.env.UNIQUE_KEY;
  res.send(response);
});

router.post('/posts', function(req,res) {
  var response = new Object();
  response.type = "Request type is POST";
  response.headers = new Object();
  response.headers = req.headers;
  if(Object.keys(req.body).length > 0) {
    response.body = req.body;
  }
  else {
    response.body = "No body in request";
  }
  response.key = process.env.UNIQUE_KEY;
  res.send(response);
});

router.put('/puts', function(req,res) {
  var response = new Object();
  response.type = "Request type is PUT";
  response.headers = new Object();
  response.headers = req.headers;
  if(Object.keys(req.body).length > 0) {
    response.body = req.body;
  }
  else {
    response.body = "No body in request";
  }
  response.key = process.env.UNIQUE_KEY;
  res.send(response);
});

router.delete('/deletes', function(req,res) {
  var encoded = req.header("Authorization");
  if(encoded != undefined) {
    var decoded = Buffer.from(encoded.split(' ')[1], 'base64').toString();
    if(decoded.split(':')[0] == username && decoded.split(":")[1] == password) {
      var response = new Object();
      response.type = "Request type is DELETE";
      response.headers = new Object();
      response.headers = req.headers;
      if(Object.keys(req.body).length > 0) {
        response.body = req.body;
      }
      else {
        response.body = "No body in request";
      }
      response.key = process.env.UNIQUE_KEY;
      res.send(response);
    }
    else {
      res.status(401).send("Unauthorized Request");
    }
  }
  else {
    res.status(401).send("Unauthorized Request");
  }
});

router.use('*', function(req, res) {
  res.send('Invalid Request or Type');
})

module.exports = router;
