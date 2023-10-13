const mongoose = require('mongoose');
require("./Category");

const productSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    color: {type: String, required: true},
    size: {type: String, required: true},
    quantity: {type: Number, required: true, min: 0, max:1000},
    image: {type: [String], required: true},
    category:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        require: false
    }
},
{
    collection: 'products'
});

const product = mongoose.model('product', productSchema);

module.exports = product;