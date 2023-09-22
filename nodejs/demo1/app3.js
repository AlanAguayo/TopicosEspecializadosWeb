/*
const express = require('express');
const app = express();
const port=3000;

app.get('/', function(req, res){
    res.send('Homepage');
});
*/
const express = require('express');
let app = express();

app.get('/', function(req, res){
    res.send('Homepage');
});

app.get('/about', function(req, res){
    res.send('About page');
});

app.get('/contact', function(req, res){
    res.send('Contact page');
});

app.get('/products', function(req, res){
    res.send('Products page');
});

app.listen(3000, function(){
    console.log('app is running on port 3000');
});