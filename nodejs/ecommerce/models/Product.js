const mongoose = require('mongoose');
require("./Category");

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    color: String,
    size: String,
    quantity: Number,
    image: [String],
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