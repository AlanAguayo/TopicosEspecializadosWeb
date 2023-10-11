const mongoose = require('mongoose')

const supplierProductSchema = mongoose.Schema({
    supplier: {type: mongoose.Types.ObjectId, ref: 'supplier'},
    product:{type: mongoose.Types.ObjectId, ref: 'product'}
}, {collection: 'supplier_product'})

const SupplierProduct = mongoose.model('supplierProduct', supplierProductSchema)

module.exports = SupplierProduct