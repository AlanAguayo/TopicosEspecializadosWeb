var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('pages/index.pug');
});

app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/products', function(req, res) {
    var products = [
        { name: 'product1', sale_price: "10"},
        { name: 'product2', sale_price: "20"},
        { name: 'product3', sale_price: "30"}
    ];

    res.render('pages/products', {
        products: products,
    });
});

app.listen(3000);
console.log('Puerto: 3000');