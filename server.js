var QuizBot = require('./index.js');
var myQuizBot = new QuizBot(process.env.SLACKBOT_TOKEN);

var http = require('http'); 
var url = require('url'); 

http.createServer(function (req, res) { 
  console.log("Request: " + req.method + " to " + req.url); 
  res.writeHead(200, "OK"); 
  res.write("OK"); 
  res.end(); 
}).listen(process.env.PORT || 8000); 

console.log("Ready...");
