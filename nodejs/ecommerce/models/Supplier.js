const mongoose = require('mongoose')

const supplierSchema = mongoose.Schema({
    id: {type: Number, require: true},
    name: {type: String, require: true},
    address: {type: String, require: true},
    phone: {type: String, require: true},
    email: {type: String, require: true}

}, {collection:'suppliers'})

const Supplier =mongoose.model('supplier', supplierSchema)

module.exports = Supplier;