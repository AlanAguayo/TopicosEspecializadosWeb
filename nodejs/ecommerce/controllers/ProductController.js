const mongoose = require("mongoose");
const product = require("../models/Product.js");
const SupplierProduct = require("../models/SupplierProduct.js");
const Supplier = require("../models/Supplier.js");

const findAll = async (req, res) => {
    try {
        const products = await product.find().populate("category");
        res.send(products);
    } catch (error) {
        console.log(error);
    }
};

const findOne = async (req, res) => {
    try {
        const products = await product.find({ "id": parseInt(req.params.id) }).populate("category","id name -_id");
        res.send(products);
    } catch (error) {
        console.log(error);
    }
};

const save = async (req, res) => {
    try {
        let objNewProduct = req.body
        /*let totalProducts = await Product.count({});
        objNewProduct.id = totalProducts++*/
        const p = await product.find().sort({"id":-1}).limit(1)
        objNewProduct.id = parseInt(p[0].id) + 1

        objNewProduct.category = new mongoose.Types.ObjectId(req.body.category)
        const Product = new product(objNewProduct)
        let savedProduct = await Product.save()
        res.send(savedProduct)
       
    } catch (e) {
        //console.log(error.errors)
        res.status(400).send(e)
    }
}

const update = async (req,res)=>{
    try {
        const result = await product.findOneAndUpdate(
           { "id" : req.body.id },
           { $set:  req.body },
           { upsert:true, returnDocument: 'after' }
        );
        res.send(result);
    } catch (e) {
        console.log(e)
    }
}

const drop = async (req,res)=>{
    try {
        const result = await product.findOneAndDelete( { "id":parseInt(req.params.id) });
        if (result)
            res.send("Product deleted.")
        else
            res.send("Product not found.")            
    } catch (error) {
        console.log(error)
    }
}

const productsBySupplier = async (req, res)=> {
    try {
        const products_by_supplier = await SupplierProduct
                                    .find({supplier:new mongoose.Types.ObjectId(req.params.supplier_id)})
                                    .populate('supplier', 'name -_id')
                                    .populate('product', 'id name -_id').select('-_id')
                                   
        /* res.send(products_by_supplier) */

        const s = await Supplier.findById(req.params.supplier_id).select('id name -_id')

        let arrProducts = [];
        Object.entries(products_by_supplier).forEach(entry => {
            const [key, value] = entry;
            arrProducts.push(value.product);
        });
        let newObj = {
            supplier_id: s.id,
            supplier_name: s.name,
            products: arrProducts
        }
        res.send(newObj)

    } catch (error) {
        console.log(error)
    }
}

module.exports = {findAll, findOne, save, update, drop, productsBySupplier};