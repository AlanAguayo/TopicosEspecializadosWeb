const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
/*
const home = fs.readFileSync(path.join(__dirname + '/views/home.html'));
const products = fs.readFileSync(path.join(__dirname + '/views/products.html'));
const contact = fs.readFileSync(path.join(__dirname + '/views/contact.html'));
const about = fs.readFileSync(path.join(__dirname + '/views/about.html'));
*/
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/products', (req, res) => {
    res.sendFile(__dirname + '/views/products.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

