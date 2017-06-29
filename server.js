const express = require('express');
const fs = require('fs');

const LOCAL_IP = require('ip').address();
const LISTENING_PORT = 443;
const REDIRECT_PORT = 8080;
const REDIRECTION_PROTOCOL = "https";

var app = express();
app.get('*',function(req,res){  
	console.log(`Incoming request -  ${req.url}, Redirecting to - ${REDIRECTION_PROTOCOL}://${LOCAL_IP}:${REDIRECT_PORT}${req.url}`);
    res.redirect(`${REDIRECTION_PROTOCOL}://${LOCAL_IP}:${REDIRECT_PORT}`+req.url)
});

app.listen(443, function(){
	console.log(`Redirection Server listening on port ${LOCAL_IP}:${LISTENING_PORT}`);
});