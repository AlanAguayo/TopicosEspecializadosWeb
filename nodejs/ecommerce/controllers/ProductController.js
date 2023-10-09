const mongoose = require("mongoose");
const product = require("../models/Product.js");

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

module.exports = {findAll, findOne, save, update, drop};