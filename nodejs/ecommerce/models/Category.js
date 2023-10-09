const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    id: Number,
    name: String
},
{
    collection: 'categories'
});

const category = mongoose.model('Category', categorySchema);

module.exports = category;